import { describe, it, expect } from 'vitest'
import * as sass from 'sass'
import path from 'path'

const stylesPath = path.resolve(__dirname, '../../..')

function compile(scss: string): string {
  return sass
    .compileString(scss, {
      loadPaths: [stylesPath]
    })
    .css.trim()
}

describe('color.scss - Comprehensive Design System Color Tests', () => {
  describe('Helper Functions & Hex Parsing Utilities', () => {
    describe('hexToDec', () => {
      it('should convert single hex characters (lowercase and uppercase)', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            v0: ui.hexToDec('0');
            v9: ui.hexToDec('9');
            va: ui.hexToDec('a');
            vf: ui.hexToDec('f');
            vA: ui.hexToDec('A');
            vF: ui.hexToDec('F');
          }
        `)
        expect(css).toContain('v0: 0;')
        expect(css).toContain('v9: 9;')
        expect(css).toContain('va: 10;')
        expect(css).toContain('vf: 15;')
        expect(css).toContain('vA: 10;')
        expect(css).toContain('vF: 15;')
      })

      it('should convert multi-digit hex strings', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            v14: ui.hexToDec('14');
            v3b: ui.hexToDec('3b');
            vff: ui.hexToDec('ff');
            vFF: ui.hexToDec('FF');
          }
        `)
        expect(css).toContain('v14: 20;')
        expect(css).toContain('v3b: 59;')
        expect(css).toContain('vff: 255;')
        expect(css).toContain('vFF: 255;')
      })

      it('should return null for invalid hex characters', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            invalid_is_null: ui.hexToDec('1g') == null;
            symbol_is_null: ui.hexToDec('#f') == null;
          }
        `)
        expect(css).toContain('invalid_is_null: true;')
        expect(css).toContain('symbol_is_null: true;')
      })
    })

    describe('isHexAlphaString', () => {
      it('should return true for 9-digit (#RRGGBBAA) and 5-digit (#RGBA) hex strings', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            hex8: ui.isHexAlphaString('#3b6d9514');
            hex8_upper: ui.isHexAlphaString('#FFFFFFD6');
            hex4: ui.isHexAlphaString('#fff8');
            hex4_zero: ui.isHexAlphaString('#0000');
          }
        `)
        expect(css).toContain('hex8: true;')
        expect(css).toContain('hex8_upper: true;')
        expect(css).toContain('hex4: true;')
        expect(css).toContain('hex4_zero: true;')
      })

      it('should return false for solid hex strings without alpha (#RRGGBB and #RGB)', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            hex6: ui.isHexAlphaString('#3b6d95');
            hex3: ui.isHexAlphaString('#fff');
            keyword: ui.isHexAlphaString('transparent');
            color_var: ui.isHexAlphaString('var(--my-color)');
          }
        `)
        expect(css).toContain('hex6: false;')
        expect(css).toContain('hex3: false;')
        expect(css).toContain('keyword: false;')
        expect(css).toContain('color_var: false;')
      })
    })

    describe('hexStringToAlpha', () => {
      it('should calculate accurate alpha values [0..1] for 9-digit and 5-digit hex strings', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            a_14: ui.hexStringToAlpha('#3b6d9514');
            a_d6: ui.hexStringToAlpha('#ffffffd6');
            a_00: ui.hexStringToAlpha('#00000000');
            a_ff: ui.hexStringToAlpha('#ffffffff');
            a_4digit_8: ui.hexStringToAlpha('#fff8');
            a_4digit_0: ui.hexStringToAlpha('#0000');
            a_4digit_f: ui.hexStringToAlpha('#ffff');
          }
        `)
        expect(css).toContain('a_14: 0.0784313725;')
        expect(css).toContain('a_d6: 0.8392156863;')
        expect(css).toContain('a_00: 0;')
        expect(css).toContain('a_ff: 1;')
        expect(css).toContain('a_4digit_8: 0.5333333333;')
        expect(css).toContain('a_4digit_0: 0;')
        expect(css).toContain('a_4digit_f: 1;')
      })

      it('should return null for non-alpha strings', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            hex6_is_null: ui.hexStringToAlpha('#3b6d95') == null;
            hex3_is_null: ui.hexStringToAlpha('#fff') == null;
          }
        `)
        expect(css).toContain('hex6_is_null: true;')
        expect(css).toContain('hex3_is_null: true;')
      })
    })

    describe('hexStringToRgb', () => {
      it('should convert 9, 7, 5, and 4 character hex strings to R, G, B channel lists', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            hex9: ui.hexStringToRgb('#3b6d9514');
            hex7: ui.hexStringToRgb('#3b6d95');
            hex5: ui.hexStringToRgb('#fff8');
            hex4: ui.hexStringToRgb('#fff');
          }
        `)
        expect(css).toContain('hex9: "59, 109, 149";')
        expect(css).toContain('hex7: "59, 109, 149";')
        expect(css).toContain('hex5: "255, 255, 255";')
        expect(css).toContain('hex4: "255, 255, 255";')
      })

      it('should return non-hex input unchanged', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            v: ui.hexStringToRgb('var(--custom)');
          }
        `)
        expect(css).toContain('v: "var(--custom)";')
      })
    })

    describe('isColorAlpha', () => {
      it('should detect alpha < 1 on native Sass color objects', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            hex8: ui.isColorAlpha(#3b6d9514);
            rgba: ui.isColorAlpha(rgba(59, 109, 149, 0.08));
            hsla: ui.isColorAlpha(hsla(200, 50%, 50%, 0.5));
            transparent: ui.isColorAlpha(transparent);
          }
        `)
        expect(css).toContain('hex8: true;')
        expect(css).toContain('rgba: true;')
        expect(css).toContain('hsla: true;')
        expect(css).toContain('transparent: true;')
      })

      it('should return false for fully opaque Sass color objects', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            solid_hex: ui.isColorAlpha(#ffffff);
            solid_rgb: ui.isColorAlpha(rgb(59, 109, 149));
            solid_hsl: ui.isColorAlpha(hsl(0, 100%, 50%));
          }
        `)
        expect(css).toContain('solid_hex: false;')
        expect(css).toContain('solid_rgb: false;')
        expect(css).toContain('solid_hsl: false;')
      })

      it('should detect alpha < 1 on string hex representations', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            str_hex8: ui.isColorAlpha('#3b6d9514');
            str_hex4: ui.isColorAlpha('#fff8');
            str_solid: ui.isColorAlpha('#ffffff');
            str_var: ui.isColorAlpha('var(--color)');
          }
        `)
        expect(css).toContain('str_hex8: true;')
        expect(css).toContain('str_hex4: true;')
        expect(css).toContain('str_solid: false;')
        expect(css).toContain('str_var: false;')
      })
    })

    describe('toColorRbg & toColorOpacity', () => {
      it('should extract RGB channels and opacity from colors and hex strings', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            rgb_color: ui.toColorRbg(#3b6d9514);
            alpha_color: ui.toColorOpacity(#3b6d9514);
            rgb_str: ui.toColorRbg('#3b6d9514');
            alpha_str: ui.toColorOpacity('#3b6d9514');
            alpha_solid: ui.toColorOpacity(#ffffff);
            alpha_var: ui.toColorOpacity(var(--sys-color));
          }
        `)
        expect(css).toContain('rgb_color: "59, 109, 149";')
        expect(css).toContain('alpha_color: 0.0784313725;')
        expect(css).toContain('rgb_str: "59, 109, 149";')
        expect(css).toContain('alpha_str: 0.0784313725;')
        expect(css).toContain('alpha_solid: 1;')
        expect(css).toContain('alpha_var: var(--sys-color-opacity);')
      })
    })

    describe('getColor', () => {
      it('should preserve native alpha when opacity parameter is omitted', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            alpha_preserved: ui.getColor(#3b6d9514);
            solid_preserved: ui.getColor(#ff0000);
            string_hex_preserved: ui.getColor('#3b6d9514');
          }
        `)
        expect(css).toContain('alpha_preserved: rgba(59, 109, 149, 0.0784313725);')
        expect(css).toContain('solid_preserved: rgba(255, 0, 0, 1);')
        expect(css).toContain('string_hex_preserved: rgba(59, 109, 149, 0.0784313725);')
      })

      it('should respect explicit opacity overrides', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            overridden: ui.getColor(#3b6d9514, 0.5);
            solid_with_opacity: ui.getColor(#ff0000, 0.3);
          }
        `)
        expect(css).toContain('overridden: rgba(59, 109, 149, 0.5);')
        expect(css).toContain('solid_with_opacity: rgba(255, 0, 0, 0.3);')
      })

      it('should format as linear-gradient when gradient flag is true', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            grad: ui.getColor(#3b6d9514, null, true);
          }
        `)
        expect(css).toContain('grad: linear-gradient(0deg, rgba(59, 109, 149, 0.0784313725), rgba(59, 109, 149, 0.0784313725));')
      })
    })

    describe('getColorValue', () => {
      it('should return default rgba template without defaultValue', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            val: ui.getColorValue(--sys-background);
          }
        `)
        expect(css).toContain('val: rgba(var(--sys-background), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));')
      })

      it('should preserve alpha in fallback opacity when defaultValue has alpha', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .test {
            val_alpha: ui.getColorValue(--sys-background, #3b6d9514);
            val_solid: ui.getColorValue(--sys-background, #ffffff);
          }
        `)
        expect(css).toContain('val_alpha: rgba(var(--sys-background, 59, 109, 149), var(--sys-background-opacity, var(--sys-background-opacity-custom, 0.0784313725)));')
        expect(css).toContain('val_solid: rgba(var(--sys-background, 255, 255, 255), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));')
      })
    })
  })

  describe('System Color Mixin: colorSys', () => {
    it('should emit only RGB for solid colors to preserve parent opacity inheritance', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.colorSys('background', #ffffff);
        }
      `)
      expect(css).toContain('--sys-background: 255, 255, 255;')
      expect(css).not.toContain('--sys-background-opacity')
    })

    it('should automatically emit --sys-*-opacity when color has alpha < 1', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.colorSys('background', #3b6d9514);
        }
      `)
      expect(css).toContain('--sys-background: 59, 109, 149;')
      expect(css).toContain('--sys-background-opacity: 0.0784313725;')
    })

    it('should support !important on both RGB and opacity', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.colorSys('background', #3b6d9514, true);
        }
      `)
      expect(css).toContain('--sys-background: 59, 109, 149 !important;')
      expect(css).toContain('--sys-background-opacity: 0.0784313725 !important;')
    })

    it('should accept explicit opacity override without duplicate opacity declarations', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test1 {
          @include ui.colorSys('background', #3b6d9514, 0.5);
        }
        .test2 {
          @include ui.colorSys('background', #3b6d9514, false, 0.7);
        }
      `)
      expect(css).toContain('--sys-background-opacity: 0.5;')
      expect(css).toContain('--sys-background-opacity: 0.7;')
      // Verify no duplicate opacity in test1
      const count1 = (css.match(/--sys-background-opacity: 0\.5;/g) || []).length
      expect(count1).toBe(1)
    })

    it('should set --sys-*-opacity-custom for CSS custom variables', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.colorSys('color', var(--theme-color));
        }
      `)
      expect(css).toContain('--sys-color: var(--theme-color);')
      expect(css).toContain('--sys-color-opacity-custom: var(--theme-color-opacity);')
    })
  })

  describe('High-Level Property Mixins', () => {
    describe('backgroundColor', () => {
      it('should correctly handle 8-digit hex (#3b6d9514)', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .close-btn {
            @include ui.backgroundColor(#3b6d9514);
          }
        `)
        expect(css).toContain('--sys-background: 59, 109, 149;')
        expect(css).toContain('--sys-background-opacity: 0.0784313725;')
        expect(css).toContain('background-color: rgba(var(--sys-background), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));')
      })

      it('should handle solid hex without setting --sys-background-opacity', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .solid {
            @include ui.backgroundColor(#ffffff);
          }
        `)
        expect(css).toContain('--sys-background: 255, 255, 255;')
        expect(css).not.toContain('--sys-background-opacity:')
        expect(css).toContain('background-color: rgba(var(--sys-background), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));')
      })

      it('should handle transparent keyword by setting 0, 0, 0 with 0 opacity', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .clear {
            @include ui.backgroundColor(transparent);
          }
        `)
        expect(css).toContain('--sys-background: 0, 0, 0;')
        expect(css).toContain('--sys-background-opacity: 0;')
      })

      it('should allow explicit opacity parameter overriding color alpha', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .explicit {
            @include ui.backgroundColor(#3b6d9514, 0.4);
          }
        `)
        expect(css).toContain('--sys-background: 59, 109, 149;')
        expect(css).toContain('--sys-background-opacity: 0.4;')
        expect(css).not.toContain('--sys-background-opacity: 0.0784313725;')
      })

      it('should support !important flag across all declarations', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .important {
            @include ui.backgroundColor(#3b6d9514, null, true);
          }
        `)
        expect(css).toContain('--sys-background: 59, 109, 149 !important;')
        expect(css).toContain('--sys-background-opacity: 0.0784313725 !important;')
        expect(css).toContain('background-color: rgba(var(--sys-background), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1))) !important;')
      })

      it('should support "init" keyword', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .init {
            @include ui.backgroundColor('init');
          }
        `)
        expect(css).toContain('background-color: rgba(var(--sys-background), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));')
        expect(css).not.toContain('--sys-background:')
      })

      it('should support "as-color" keyword', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .as-color {
            @include ui.backgroundColor('as-color');
          }
        `)
        expect(css).toContain('--sys-background: var(--sys-color);')
        expect(css).toContain('--sys-background-opacity: var(--sys-color-opacity);')
        expect(css).toContain('--sys-background-opacity-custom: var(--sys-color-opacity-custom);')
      })

      it('should pass through non-color CSS values untouched', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .raw {
            @include ui.backgroundColor(none);
          }
        `)
        expect(css).toContain('background-color: none;')
        expect(css).not.toContain('--sys-background')
      })
    })

    describe('color (text color)', () => {
      it('should preserve alpha for 8-digit hex (#ffffffd6, #091620cc)', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .text-white-alpha {
            @include ui.color(#ffffffd6);
          }
          .text-dark-alpha {
            @include ui.color(#091620cc);
          }
        `)
        expect(css).toContain('--sys-color: 255, 255, 255;')
        expect(css).toContain('--sys-color-opacity: 0.8392156863;')
        expect(css).toContain('color: rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));')

        expect(css).toContain('--sys-color: 9, 22, 32;')
        expect(css).toContain('--sys-color-opacity: 0.8;')
      })

      it('should handle solid text color without setting opacity', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .solid {
            @include ui.color(#123456);
          }
        `)
        expect(css).toContain('--sys-color: 18, 52, 86;')
        expect(css).not.toContain('--sys-color-opacity:')
      })

      it('should allow explicit opacity for text color', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .explicit {
            @include ui.color(#000000, 0.6);
          }
        `)
        expect(css).toContain('--sys-color: 0, 0, 0;')
        expect(css).toContain('--sys-color-opacity: 0.6;')
      })

      it('should support "init" keyword for text color', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .init {
            @include ui.color('init');
          }
        `)
        expect(css).toContain('color: rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));')
      })
    })

    describe('borderColor', () => {
      it('should preserve alpha for 8-digit hex border (#324a5d38)', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .border {
            @include ui.borderColor(#324a5d38);
          }
        `)
        expect(css).toContain('--sys-border: 50, 74, 93;')
        expect(css).toContain('--sys-border-opacity: 0.2196078431;')
        expect(css).toContain('border-color: rgba(var(--sys-border), var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)));')
      })

      it('should support "as-color" and "init" for border', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .as-color {
            @include ui.borderColor('as-color');
          }
          .init {
            @include ui.borderColor('init');
          }
        `)
        expect(css).toContain('--sys-border: var(--sys-color);')
        expect(css).toContain('--sys-border-opacity: var(--sys-color-opacity);')
        expect(css).toContain('border-color: rgba(var(--sys-border), var(--sys-border-opacity, var(--sys-border-opacity-custom, 1)));')
      })
    })

    describe('outlineColor', () => {
      it('should preserve alpha for 8-digit hex outline (#091620cc)', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .outline {
            @include ui.outlineColor(#091620cc);
          }
        `)
        expect(css).toContain('--sys-outline: 9, 22, 32;')
        expect(css).toContain('--sys-outline-opacity: 0.8;')
        expect(css).toContain('outline-color: rgba(var(--sys-outline), var(--sys-outline-opacity, var(--sys-outline-opacity-custom, 1)));')
      })

      it('should support "as-color" and "init" for outline', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .as-color {
            @include ui.outlineColor('as-color');
          }
          .init {
            @include ui.outlineColor('init');
          }
        `)
        expect(css).toContain('--sys-outline: var(--sys-color);')
        expect(css).toContain('outline-color: rgba(var(--sys-outline), var(--sys-outline-opacity, var(--sys-outline-opacity-custom, 1)));')
      })
    })

    describe('gradient', () => {
      it('should preserve alpha for 8-digit hex gradient (#3b6d9514)', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .grad {
            @include ui.gradient(#3b6d9514);
          }
        `)
        expect(css).toContain('--sys-gradient: 59, 109, 149;')
        expect(css).toContain('--sys-gradient-opacity: 0.0784313725;')
        expect(css).toContain('background-image: linear-gradient(0deg, rgba(var(--sys-gradient), var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))), rgba(var(--sys-gradient), var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))));')
      })

      it('should support "init" for gradient', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .init {
            @include ui.gradient('init');
          }
        `)
        expect(css).toContain('background-image: linear-gradient(0deg, rgba(var(--sys-gradient), var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))), rgba(var(--sys-gradient), var(--sys-gradient-opacity, var(--sys-gradient-opacity-custom, 1))));')
      })
    })

    describe('fill and stroke', () => {
      it('should preserve alpha in fill and stroke properties', () => {
        const css = compile(`
          @use 'src/styles/color' as ui;
          .svg-icon {
            @include ui.fill(#3b6d9514);
            @include ui.stroke(#091620cc);
          }
        `)
        expect(css).toContain('--sys-background: 59, 109, 149;')
        expect(css).toContain('--sys-background-opacity: 0.0784313725;')
        expect(css).toContain('fill: rgba(var(--sys-background), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));')

        expect(css).toContain('--sys-color: 9, 22, 32;')
        expect(css).toContain('--sys-color-opacity: 0.8;')
        expect(css).toContain('stroke: rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));')
      })
    })
  })

  describe('Standalone Opacity Mixins (*Opacity)', () => {
    it('should set opacity variables with numbers and colors', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.backgroundOpacity(0.5);
          @include ui.colorOpacity(0.8);
          @include ui.borderOpacity(0.3);
          @include ui.outlineOpacity(0.4);
          @include ui.gradientOpacity(0.7);
        }
      `)
      expect(css).toContain('--sys-background-opacity: 0.5;')
      expect(css).toContain('--sys-color-opacity: 0.8;')
      expect(css).toContain('--sys-border-opacity: 0.3;')
      expect(css).toContain('--sys-outline-opacity: 0.4;')
      expect(css).toContain('--sys-gradient-opacity: 0.7;')
    })

    it('should normalize alpha when passing a color object to opacity mixins', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.backgroundOpacity(#3b6d9514);
          @include ui.colorOpacity(#091620cc);
        }
      `)
      expect(css).toContain('--sys-background-opacity: 0.0784313725;')
      expect(css).toContain('--sys-color-opacity: 0.8;')
    })

    it('should immediately apply property when $init: true is passed', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.backgroundOpacity(0.5, false, true);
          @include ui.colorOpacity(0.8, false, true);
        }
      `)
      expect(css).toContain('--sys-background-opacity: 0.5;')
      expect(css).toContain('background-color: rgba(var(--sys-background), var(--sys-background-opacity, var(--sys-background-opacity-custom, 1)));')
      expect(css).toContain('--sys-color-opacity: 0.8;')
      expect(css).toContain('color: rgba(var(--sys-color), var(--sys-color-opacity, var(--sys-color-opacity-custom, 1)));')
    })
  })

  describe('Palette & System State Mixins', () => {
    it('should handle colorSysPalette with alpha colors and custom variables', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.colorSysPalette('card', #3b6d9514);
        }
      `)
      expect(css).toContain('--sys-palette-card: var(--sys-palette, 59, 109, 149);')
      expect(css).toContain('--sys-palette-card-opacity: var(--sys-palette-opacity, 0.0784313725);')
    })

    it('should set palette base value with palette mixin', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.palette(#3b6d9514);
        }
      `)
      expect(css).toContain('--sys-palette: 59, 109, 149;')
    })

    it('should initialize palette opacities to initial with initPalette', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.initPalette;
        }
      `)
      expect(css).toContain('--sys-color-opacity: initial;')
      expect(css).toContain('--sys-background-opacity: initial;')
      expect(css).toContain('--sys-gradient-opacity: initial;')
    })

    it('should apply colorAsPalette properly', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .test {
          @include ui.colorAsPalette;
        }
      `)
      expect(css).toContain('color: rgba(var(--sys-palette-color, var(--sys-color)), var(--sys-palette-color-opacity, var(--sys-color-opacity)));')
    })
  })

  describe('Complex Scenarios & Real-world Reproduction Cases', () => {
    it('should match coral-auth-vue3 bug report cases exactly', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;

        // 1. Close button background: #3b6d9514
        .close-btn {
          @include ui.backgroundColor(#3b6d9514);
        }

        // 2. Cross icon background: #091620cc
        .cross-icon {
          @include ui.backgroundColor(#091620cc);
        }

        // 3. Text color with alpha: #ffffffd6 and #091620cc
        .btn-text {
          @include ui.color(#ffffffd6);
        }
        .chip-text {
          @include ui.color(#091620cc);
        }

        // 4. Border color with alpha: #324a5d38
        .modal-border {
          @include ui.borderColor(#324a5d38);
        }
      `)

      // 1. Close button
      expect(css).toContain('.close-btn {\n  --sys-background: 59, 109, 149;\n  --sys-background-opacity: 0.0784313725;')

      // 2. Cross icon
      expect(css).toContain('.cross-icon {\n  --sys-background: 9, 22, 32;\n  --sys-background-opacity: 0.8;')

      // 3. Text colors
      expect(css).toContain('.btn-text {\n  --sys-color: 255, 255, 255;\n  --sys-color-opacity: 0.8392156863;')
      expect(css).toContain('.chip-text {\n  --sys-color: 9, 22, 32;\n  --sys-color-opacity: 0.8;')

      // 4. Border color
      expect(css).toContain('.modal-border {\n  --sys-border: 50, 74, 93;\n  --sys-border-opacity: 0.2196078431;')
    })

    it('should preserve parent opacity inheritance when child uses opaque color', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .parent {
          --sys-background-opacity: 0.5;
          .child {
            @include ui.backgroundColor(#ffffff);
          }
        }
      `)
      // Child should not override --sys-background-opacity with 1
      expect(css).toContain('--sys-background-opacity: 0.5;')
      expect(css).not.toContain('.child {\n    --sys-background-opacity: 1;')
      expect(css).toContain('--sys-background: 255, 255, 255;')
    })

    it('should render borderByFilter with custom var or hex', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .filter-border {
          @include ui.borderByFilter(var(--border-col), 2px);
        }
      `)
      expect(css).toContain('drop-shadow(1px 0 0 rgba(var(--border-col), var(--border-col-opacity, 1)))')
    })

    it('should correctly process properties via propertiesProperty.initProperty', () => {
      const css = compile(`
        @use 'src/styles/properties/propertiesProperty' as prop;
        .prop-bg {
          @include prop.initProperty((
            'name': 'background-color',
            'value': #3b6d9514
          ));
        }
        .prop-color {
          @include prop.initProperty((
            'name': 'color',
            'value': #ffffffd6
          ));
        }
      `)
      expect(css).toContain('.prop-bg {\n  --sys-background: 59, 109, 149;\n  --sys-background-opacity: 0.0784313725;')
      expect(css).toContain('.prop-color {\n  --sys-color: 255, 255, 255;\n  --sys-color-opacity: 0.8392156863;')
    })

    it('should correctly preserve opacity custom properties in gradientOpacity on hover', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .button {
          @include ui.gradient(#{var(--sys-color)});
          @include ui.gradientOpacity(#{0});

          &:hover {
            @include ui.gradientOpacity(#{var(--d1-sys-opacity-hover)});
            @include ui.gradient('init');
          }
        }
      `)
      expect(css).toContain('--sys-gradient-opacity: var(--d1-sys-opacity-hover);')
      expect(css).not.toContain('--d1-sys-opacity-hover-opacity')
    })

    it('should preserve opacity CSS custom variables without appending -opacity', () => {
      const css = compile(`
        @use 'src/styles/color' as ui;
        .case {
          @include ui.backgroundOpacity(#{var(--d1-sys-opacity-focus)});
          @include ui.colorOpacity(#{var(--d1-sys-opacity-disabled)});
          @include ui.borderOpacity(#{var(--d1-sys-opacity-divider)});
        }
      `)
      expect(css).toContain('--sys-background-opacity: var(--d1-sys-opacity-focus);')
      expect(css).toContain('--sys-color-opacity: var(--d1-sys-opacity-disabled);')
      expect(css).toContain('--sys-border-opacity: var(--d1-sys-opacity-divider);')
      expect(css).not.toContain('-opacity-opacity')
    })
  })
})
