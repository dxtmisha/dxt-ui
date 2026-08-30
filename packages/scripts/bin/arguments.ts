import process from 'node:process'
import { parseArgs } from 'node:util'

/**
 * CLI option specification for command argument parsing.
 *
 * Спецификация опции CLI для разбора аргументов команды.
 */
export interface CliOptionItem {
  /** Option value type / Тип значения опции */
  type: 'string' | 'boolean'

  /** Short single-letter alias / Короткий однобуквенный алиас */
  short?: string

  /** Default value used when the option is omitted / Значение по умолчанию при отсутствии опции */
  default?: string | boolean

  /** Short option description shown in the help message / Краткое описание опции в сообщении справки */
  description: string
}

/** Parsed CLI values record type / Тип записи разобранных значений CLI */
type CliValues = Record<string, string | boolean | undefined>

/**
 * Parsed CLI option specification accepted by the Node.js parseArgs utility.
 *
 * Спецификация разобранной опции CLI, принимаемая утилитой parseArgs из Node.js.
 */
interface CliParsedOption {
  /** Option value type / Тип значения опции */
  type: 'string' | 'boolean'

  /** Short single-letter alias / Короткий однобуквенный алиас */
  short?: string

  /** Default value used when the option is omitted / Значение по умолчанию при отсутствии опции */
  default?: string | boolean
}

/**
 * Parsed CLI arguments result returned from command argument parsing.
 *
 * Результат разбора аргументов CLI, возвращаемый при разборе аргументов команды.
 */
export interface CliParsedResults {
  /** Parsed option values keyed by option name / Разобранные значения опций по имени опции */
  values: CliValues
}

/**
 * CLI option entry pairing the option name with its specification.
 *
 * Запись опции CLI, сопоставляющая имя опции с ее спецификацией.
 */
interface CliOptionEntry {
  /** Option name / Имя опции */
  name: string

  /** Option specification / Спецификация опции */
  option: CliOptionItem
}

/**
 * Parses command line arguments with strict validation and handles the --help flag.
 *
 * Разбирает аргументы командной строки со строгой валидацией и обрабатывает флаг --help.
 * @param description short command description shown in the help message / краткое описание команды в сообщении справки
 * @param usage command usage line / строка использования команды
 * @param options command options specification / спецификация опций команды
 * @returns parsed option values and positional arguments / разобранные значения опций и позиционные аргументы
 */
export function parseCliArguments(
  description: string,
  usage: string,
  options: Record<string, CliOptionItem> = {}
): CliParsedResults {
  const optionsParsed: Record<string, CliParsedOption> = {}

  for (const [name, option] of Object.entries(options)) {
    const optionParsed: CliParsedOption = {
      type: option.type
    }

    if (option.short !== undefined) {
      optionParsed.short = option.short
    }

    if (option.default !== undefined) {
      optionParsed.default = option.default
    }

    optionsParsed[name] = optionParsed
  }

  optionsParsed.help = {
    type: 'boolean',
    short: 'h',
    default: false
  }

  const { values } = parseArgs({
    options: optionsParsed,
    strict: true
  })

  if (values.help) {
    console.log(toHelpMessage(description, usage, options))
    process.exit(0)
  }

  return {
    values: values as CliValues
  }
}

/**
 * Formats the help message with description, usage, and options list.
 *
 * Форматирует сообщение справки с описанием, использованием и списком опций.
 * @param description short command description / краткое описание команды
 * @param usage command usage line / строка использования команды
 * @param options command options specification / спецификация опций команды
 * @returns formatted help message / отформатированное сообщение справки
 */
function toHelpMessage(
  description: string,
  usage: string,
  options: Record<string, CliOptionItem>
): string {
  const entries: CliOptionEntry[] = [
    {
      name: 'help',
      option: {
        type: 'boolean',
        short: 'h',
        description: 'Show this help message and exit'
      }
    },
    ...Object.entries(options)
      .map(
        ([name, option]) => ({ name, option })
      )
  ]

  const labels = entries.map(({ name, option }) => {
    const short = option.short ? `-${option.short}, ` : '    '

    return `${short}--${name}`
  })
  const labelWidth = Math.max(...labels.map(label => label.length)) + 2

  const list = entries.map(({ option }, index) => {
    const defaultValue = option.default !== undefined ? ` (default: ${String(option.default)})` : ''

    return `${labels[index].padEnd(labelWidth)}${option.description}${defaultValue}`
  })

  return [
    description,
    '',
    usage,
    '',
    'Options:',
    ...list
  ].join('\n')
}
