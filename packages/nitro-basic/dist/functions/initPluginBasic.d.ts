import { NitroApp } from 'nitropack';
import { NitroAppBasicConfig } from '../types/nitroAppTypes';
/**
 * Initialize basic functions for Nitro.
 *
 * Инициализация базовых функций для Nitro.
 * @param _ Nitro application instance / Экземпляр приложения Nitro
 * @param config Configuration / Конфигурация
 */
export declare function initPluginBasic<N extends NitroApp & Record<string, any> = NitroApp>(_: N, config?: NitroAppBasicConfig): void;
