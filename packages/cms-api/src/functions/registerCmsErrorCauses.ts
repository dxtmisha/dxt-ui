import {
  ErrorCenter,
  type ErrorCenterCauseList,
  type ErrorCenterInstance
} from '@dxtmisha/functional-basic'
import { cmsErrorCauseList } from '../media/errors/cmsErrorCauseList'

/**
 * Registers CMS error causes in the target ErrorCenter without overwriting existing entries.
 *
 * Регистрирует описания ошибок CMS в целевом ErrorCenter без перезаписи существующих.
 * @param errorCenter ErrorCenter instance / Экземпляр ErrorCenter
 * @param causes List of error causes to register / Список описаний ошибок для регистрации
 */
export function registerCmsErrorCauses(
  errorCenter: ErrorCenterInstance = ErrorCenter.getItem(),
  causes: ErrorCenterCauseList = cmsErrorCauseList
): void {
  for (const cause of causes) {
    if (!errorCenter.has(cause.code, cause.group)) {
      errorCenter.add(cause)
    }
  }
}
