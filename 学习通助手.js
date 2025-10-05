// ==UserScript==
// @name         🥇超星学习通｜知到智慧树--网课小助手|修复视频播放|自动跳转任务点|自动答题|超高题库覆盖率|逐渐支持更多平台
// @namespace    noshuang
// @version      0.2.1
// @author       isMobile
// @description  🏆 目前已经支持的平台：【超星学习通「功能基本完成」】【知到智慧树「目前只支持答题」】。🚀 目前已经具有的功能包括：▶️视频自动观看，跳转下一个任务点，📄章节测试、作业自动完成，无答案自动保存，💯考试自动完成，自动切换、保存。使用脚本请进入对应平台的页面。
// @license      MIT
// @icon         https://vitejs.dev/logo.svg
// @compatible   chrome Chrome 80+
// @compatible   firefox Firefox 75+
// @compatible   edge Edge 80+
// @compatible   opera Opera 67+
// @compatible   safari Safari 14+
// @match        *://*.chaoxing.com/*
// @match        *://*.edu.cn/*
// @match        *://*.nbdlib.cn/*
// @match        *://*.hnsyu.net/*1
// @match        *://*.gdhkmooc.com/*
// @match        *://*.zhihuishu.com/*
// @require      https://lib.baomitu.com/vue/3.4.31/vue.global.prod.js
// @require      https://lib.baomitu.com/vue-demi/0.14.7/index.iife.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://lib.baomitu.com/element-plus/2.7.2/index.full.min.js
// @require      https://lib.baomitu.com/pinia/2.1.7/pinia.iife.min.js
// @require      https://lib.baomitu.com/rxjs/7.8.1/rxjs.umd.min.js
// @require      https://lib.baomitu.com/blueimp-md5/2.19.0/js/md5.min.js
// @resource     ElementPlus       https://lib.baomitu.com/element-plus/2.7.2/index.css
// @resource     ElementPlusStyle  https://lib.baomitu.com/element-plus/2.8.2/index.min.css
// @resource     ttf               https://www.forestpolice.org/ttf/2.0/table.json
// @connect      api.tikuhai.com
// @connect      cx.icodef.com
// @connect      62.234.36.191
// @connect      api.openai.com
// @connect      open.bigmodel.cn
// @connect      dashscope.aliyuncs.com
// @connect      *
// @grant        GM_getResourceText
// @grant        GM.getResourceText
// @grant        GM_getValue
// @grant        GM.getValue
// @grant        GM_info
// @grant        GM.info
// @grant        GM_setValue
// @grant        GM.setValue
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @grant        window.close
// @run-at       document-start
// @antifeature  ads      公众号或者app辅助答题
// @antifeature  payment  付费答题
// @downloadURL https://update.greasyfork.org/scripts/488083/%F0%9F%A5%87%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%EF%BD%9C%E7%9F%A5%E5%88%B0%E6%99%BA%E6%85%A7%E6%A0%91--%E7%BD%91%E8%AF%BE%E5%B0%8F%E5%8A%A9%E6%89%8B%7C%E4%BF%AE%E5%A4%8D%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%7C%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AC%E4%BB%BB%E5%8A%A1%E7%82%B9%7C%E8%87%AA%E5%8A%A8%E7%AD%94%E9%A2%98%7C%E8%B6%85%E9%AB%98%E9%A2%98%E5%BA%93%E8%A6%86%E7%9B%96%E7%8E%87%7C%E9%80%90%E6%B8%90%E6%94%AF%E6%8C%81%E6%9B%B4%E5%A4%9A%E5%B9%B3%E5%8F%B0.user.js
// @updateURL https://update.greasyfork.org/scripts/488083/%F0%9F%A5%87%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%EF%BD%9C%E7%9F%A5%E5%88%B0%E6%99%BA%E6%85%A7%E6%A0%91--%E7%BD%91%E8%AF%BE%E5%B0%8F%E5%8A%A9%E6%89%8B%7C%E4%BF%AE%E5%A4%8D%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE%7C%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AC%E4%BB%BB%E5%8A%A1%E7%82%B9%7C%E8%87%AA%E5%8A%A8%E7%AD%94%E9%A2%98%7C%E8%B6%85%E9%AB%98%E9%A2%98%E5%BA%93%E8%A6%86%E7%9B%96%E7%8E%87%7C%E9%80%90%E6%B8%90%E6%94%AF%E6%8C%81%E6%9B%B4%E5%A4%9A%E5%B9%B3%E5%8F%B0.meta.js
// ==/UserScript==

(a=>{const e=document.createElement("style");e.dataset.source="vite-plugin-monkey",e.textContent=a,document.head.append(e)})(" .log[data-v-d41d5897]{el-text[data-v-d41d5897] {white-space: normal;}}@keyframes typing-effect {from {border-right: 2px solid #67c23a;} to {border-right: 2px solid transparent;}}.typing-animation {border-right: 2px solid #67c23a; animation: typing-effect 0.7s infinite;}.setting[data-v-4489784f]{margin-top:-8px;font-size:14px}.setting[data-v-4489784f] .el-form-item[data-v-4489784f]{margin-bottom:0}.question_table[data-v-18523ca7]{width:625px}.main-page{z-index:100003;position:fixed}.main-page .overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1001}.main-page .el-card .card-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;margin:0;padding:0;cursor:move}.main-page .el-card .card-header .title{font-size:14px;display:flex;align-items:center;justify-content:center;font-weight:500}.main-page .el-card .minus{margin:5px 10px -10px 0}.main-page .demo-tabs{display:initial}.main-page .el-card__header{background-color:#1f71e0;color:#fff;padding:7px 10px 7px 16px;margin:0}.main-page .el-card__body{padding:0 16px 20px}.main-page .el-tabs__nav-wrap:after{height:1px}.main-page .el-tabs__active-bar{background-color:#176ae5}.main-page .el-tabs__item{font-size:13px;height:34px}.main-page .el-tabs__item.is-top{font-weight:400;color:#4e5969;padding:0 8px 0 12px}.main-page .el-tabs__item.is-active{font-weight:500;color:#176ae5;padding:0 8px 0 12px} ");

(function (vue, pinia, rxjs, md5, ElementPlus) {
    'use strict';

    // =================== 全局单例检查 ===================
    // 使用唯一标识符防止脚本多次执行
    const SCRIPT_UNIQUE_ID = 'xuexitong_helper_instance_v2_1';

    // 检查是否已经初始化
    if (window[SCRIPT_UNIQUE_ID]) {
        console.warn('检测到脚本已在运行，停止重复加载');
        return;
    }

    // 标记脚本已加载
    window[SCRIPT_UNIQUE_ID] = true;

    // 同时在unsafeWindow上标记（如果存在）
    if (typeof unsafeWindow !== 'undefined' && unsafeWindow !== window) {
        if (unsafeWindow[SCRIPT_UNIQUE_ID]) {
            console.warn('检测到脚本已在unsafeWindow运行，停止重复加载');
            return;
        }
        unsafeWindow[SCRIPT_UNIQUE_ID] = true;
    }
    // =================== 全局单例检查结束 ===================

    // =================== 统一配置管理模块 ===================
    /**
     * 全局常量配置
     * 集中管理所有魔法数字和配置项，便于维护
     */
    const CONSTANTS = {
        // 脚本基本信息
        SCRIPT: {
            VERSION: '0.2.1',
            NAME: '超星学习通网课助手',
            AUTHOR: 'isMobile',
            NAMESPACE: 'noshuang'
        },

        // 时间相关配置（毫秒）
        TIMING: {
            DEFAULT_DEBOUNCE_DELAY: 300,      // 默认防抖延迟
            DEFAULT_THROTTLE_DELAY: 300,      // 默认节流延迟
            CONFIG_SAVE_DELAY: 1000,          // 配置保存延迟
            SEARCH_DELAY: 500,                // 搜索延迟
            SCROLL_THROTTLE: 200,             // 滚动事件节流
            RETRY_DELAY: 2000,                // 重试延迟
            SLEEP_INTERVAL: 3000,             // 默认睡眠间隔
            AI_TYPING_SPEED: 15,              // AI打字速度（毫秒/字符）
        },

        // AI模型配置
        AI: {
            MAX_TOKENS: null,                  // 不设置最大token限制
            DEFAULT_TIMEOUT: 120000,           // 默认超时时间120秒
            MIN_TIMEOUT: 10000,                // 最小超时10秒
            MAX_TIMEOUT: 300000,               // 最大超时300秒
            DEFAULT_TEMPERATURE: 0.3,          // 默认温度参数
            MIN_TEMPERATURE: 0,                // 最小温度
            MAX_TEMPERATURE: 2,                // 最大温度
            MAX_RETRIES: 1,                    // 最大重试次数
            RETRY_DELAY: 2000,                 // 重试延迟
            DEFAULT_SYSTEM_PROMPT: '你是一个专业的在线教育答题助手。请根据题目内容，直接给出正确答案。对于选择题，只返回选项字母或内容；对于判断题，返回\'正确\'或\'错误\'；对于填空题，如果有多个空，请用英文逗号、中文逗号、顿号或空格分隔答案（例如：答案1,答案2,答案3 或 答案1、答案2、答案3 或 答案1 答案2 答案3）；对于简答题，返回简洁准确的答案。不要解释，只返回答案。',
            REQUEST_FORMAT: {
                OPENAI: 'openai',
                CUSTOM: 'custom'
            }
        },

        // 字符编码相关
        CHAR_CODES: {
            A: 65,                             // 字母A的ASCII码
            Z: 90,                             // 字母Z的ASCII码
        },

        // 答题相关配置
        ANSWER: {
            MIN_ACCURACY_RATE: 85,             // 最低正确率（百分比）
            DEFAULT_INTERVAL: 3,               // 默认答题间隔（秒）
            MIN_INTERVAL: 3,                   // 最小间隔
            MAX_INTERVAL: 60,                  // 最大间隔
        },

        // 题库API配置
        QUESTION_BANK: {
            DEFAULT_APIS: [
                {
                    name: '题库',
                    token: '',
                    url: 'http://api.tikuhai.com'
                }
            ],
            TIMEOUT: 30000,                    // 题库请求超时
        },

        // 题目类型映射
        QUESTION_TYPES: {
            SINGLE_CHOICE: '0',                // 单选题
            MULTIPLE_CHOICE: '1',              // 多选题
            FILL_BLANK: '2',                   // 填空题
            TRUE_FALSE: '3',                   // 判断题
            SHORT_ANSWER: '4',                 // 简答题
            NOUN_EXPLANATION: '5',             // 名词解释
            ESSAY: '6',                        // 论述题
            CALCULATION: '7',                  // 计算题
        },

        // DOM相关配置
        DOM: {
            CACHE_ENABLED: true,               // 是否启用DOM缓存
            PRELOAD_SELECTORS: [               // 预加载的选择器
                '.question-title',
                '.question-options',
                '.submit-button',
                '.next-button'
            ]
        },

        // 性能相关配置
        PERFORMANCE: {
            MAX_CACHE_SIZE: 100,               // 最大缓存数量
            CLEANUP_INTERVAL: 300000,          // 清理间隔（5分钟）
        },

        // UI相关配置
        UI: {
            DEFAULT_POSITION: {
                x: '800px',
                y: '200px'
            },
            Z_INDEX: 100003,                   // 主窗口层级
            OVERLAY_Z_INDEX: 1001,             // 遮罩层级
        },

        // 日志相关
        LOG: {
            ENABLED: true,                     // 是否启用日志
            MAX_LOGS: 1000,                    // 最大日志数量
        },

        // 快捷键配置
        HOTKEYS: {
            DEFAULT_HIDE: 'ctrl+alt+l',        // 默认隐藏/显示快捷键
        }
    };

    /**
     * 配置验证器
     * 提供配置项的验证和规范化功能
     */
    class ConfigValidator {
        /**
         * 验证AI配置
         * @param {Object} aiConfig - AI配置对象
         * @returns {Object} { valid: boolean, errors: Array<string> }
         */
        static validateAIConfig(aiConfig) {
            const errors = [];

            if (!aiConfig) {
                errors.push('AI配置对象不能为空');
                return { valid: false, errors };
            }

            if (aiConfig.enabled) {
                // 验证API地址
                if (!aiConfig.apiUrl || typeof aiConfig.apiUrl !== 'string') {
                    errors.push('AI已启用但API地址无效');
                } else {
                    try {
                        new URL(aiConfig.apiUrl);
                    } catch (e) {
                        errors.push('API地址格式不正确');
                    }
                }

                // 验证API密钥
                if (!aiConfig.apiKey || typeof aiConfig.apiKey !== 'string') {
                    errors.push('AI已启用但API密钥无效');
                }

                // 验证模型名称
                if (!aiConfig.model || typeof aiConfig.model !== 'string') {
                    errors.push('AI已启用但模型名称无效');
                }

                // 验证温度参数
                if (typeof aiConfig.temperature !== 'number' || 
                    aiConfig.temperature < CONSTANTS.AI.MIN_TEMPERATURE || 
                    aiConfig.temperature > CONSTANTS.AI.MAX_TEMPERATURE) {
                    errors.push(`温度参数必须在${CONSTANTS.AI.MIN_TEMPERATURE}到${CONSTANTS.AI.MAX_TEMPERATURE}之间`);
                }

                // 验证超时时间
                if (typeof aiConfig.timeout !== 'number' || 
                    aiConfig.timeout < CONSTANTS.AI.MIN_TIMEOUT || 
                    aiConfig.timeout > CONSTANTS.AI.MAX_TIMEOUT) {
                    errors.push(`超时时间必须在${CONSTANTS.AI.MIN_TIMEOUT/1000}到${CONSTANTS.AI.MAX_TIMEOUT/1000}秒之间`);
                }

                // 验证请求格式
                const validFormats = Object.values(CONSTANTS.AI.REQUEST_FORMAT);
                if (!validFormats.includes(aiConfig.requestFormat)) {
                    errors.push(`请求格式必须是: ${validFormats.join(', ')}`);
                }
            }

            return { valid: errors.length === 0, errors };
        }

        /**
         * 验证题库API配置
         * @param {Array} apis - API配置数组
         * @returns {Object}
         */
        static validateQuestionBankAPIs(apis) {
            const errors = [];

            if (!Array.isArray(apis)) {
                errors.push('题库API配置必须是数组');
                return { valid: false, errors };
            }

            apis.forEach((api, index) => {
                if (!api.name || typeof api.name !== 'string') {
                    errors.push(`API[${index}]: 名称无效`);
                }
                if (!api.url || typeof api.url !== 'string') {
                    errors.push(`API[${index}]: URL无效`);
                } else {
                    try {
                        new URL(api.url);
                    } catch (e) {
                        errors.push(`API[${index}]: URL格式不正确`);
                    }
                }
            });

            return { valid: errors.length === 0, errors };
        }

        /**
         * 验证答题配置
         * @param {Object} answerConfig - 答题配置
         * @returns {Object}
         */
        static validateAnswerConfig(answerConfig) {
            const errors = [];

            if (answerConfig.interval) {
                const interval = answerConfig.interval;
                if (typeof interval !== 'number' || 
                    interval < CONSTANTS.ANSWER.MIN_INTERVAL || 
                    interval > CONSTANTS.ANSWER.MAX_INTERVAL) {
                    errors.push(`答题间隔必须在${CONSTANTS.ANSWER.MIN_INTERVAL}到${CONSTANTS.ANSWER.MAX_INTERVAL}秒之间`);
                }
            }

            if (answerConfig.accuracyRate !== undefined) {
                const rate = answerConfig.accuracyRate;
                if (typeof rate !== 'number' || rate < 0 || rate > 100) {
                    errors.push('正确率必须在0到100之间');
                }
            }

            return { valid: errors.length === 0, errors };
        }

        /**
         * 验证完整配置
         * @param {Object} config - 完整配置对象
         * @returns {Object}
         */
        static validateFullConfig(config) {
            const allErrors = [];

            // 验证AI配置
            if (config.aiModelConfig) {
                const { valid, errors } = this.validateAIConfig(config.aiModelConfig);
                if (!valid) {
                    allErrors.push(...errors.map(e => `AI配置: ${e}`));
                }
            }

            // 验证题库API
            if (config.queryApis) {
                const { valid, errors } = this.validateQuestionBankAPIs(config.queryApis);
                if (!valid) {
                    allErrors.push(...errors.map(e => `题库API: ${e}`));
                }
            }

            // 验证答题配置
            if (config.otherParams) {
                const answerConfig = {
                    interval: config.otherParams.params?.find(p => p.name === '切换、答题间隔，单位秒')?.value,
                    accuracyRate: config.otherParams.params?.find(p => p.name === '正确率达到多少自动提交')?.value
                };
                const { valid, errors } = this.validateAnswerConfig(answerConfig);
                if (!valid) {
                    allErrors.push(...errors.map(e => `答题配置: ${e}`));
                }
            }

            return { valid: allErrors.length === 0, errors: allErrors };
        }

        /**
         * 规范化配置（填充默认值）
         * @param {Object} config - 配置对象
         * @returns {Object} 规范化后的配置
         */
        static normalizeConfig(config) {
            const normalized = { ...config };

            // 规范化AI配置
            if (normalized.aiModelConfig) {
                normalized.aiModelConfig = {
                    enabled: normalized.aiModelConfig.enabled || false,
                    apiUrl: normalized.aiModelConfig.apiUrl || '',
                    apiKey: normalized.aiModelConfig.apiKey || '',
                    model: normalized.aiModelConfig.model || '',
                    temperature: normalized.aiModelConfig.temperature ?? CONSTANTS.AI.DEFAULT_TEMPERATURE,
                    maxTokens: normalized.aiModelConfig.maxTokens ?? CONSTANTS.AI.MAX_TOKENS,
                    timeout: normalized.aiModelConfig.timeout ?? CONSTANTS.AI.DEFAULT_TIMEOUT,
                    systemPrompt: normalized.aiModelConfig.systemPrompt || CONSTANTS.AI.DEFAULT_SYSTEM_PROMPT,
                    answerPriority: normalized.aiModelConfig.answerPriority || 'database',
                    requestFormat: normalized.aiModelConfig.requestFormat || CONSTANTS.AI.REQUEST_FORMAT.OPENAI
                };
            }

            // 规范化快捷键
            if (!normalized.hideHotkey) {
                normalized.hideHotkey = CONSTANTS.HOTKEYS.DEFAULT_HIDE;
            }

            return normalized;
        }
    }

    // 导出配置到全局
    if (typeof unsafeWindow !== 'undefined' && unsafeWindow !== window) {
        unsafeWindow.XUEXITONG_CONSTANTS = CONSTANTS;
        unsafeWindow.ConfigValidator = ConfigValidator;
    }

    console.log('✅ 统一配置管理模块已加载');
    // =================== 统一配置管理模块结束 ===================

    // =================== 内存泄漏修复：资源清理管理器 ===================
    const CLEANUP_MANAGER = {
        intervals: new Set(),
        timeouts: new Set(),
        eventListeners: new Map(),
        watchers: new Set(),
        
        registerInterval(id) {
            if (id != null) {
                this.intervals.add(id);
            }
            return id;
        },
        
        registerTimeout(id) {
            if (id != null) {
                this.timeouts.add(id);
            }
            return id;
        },
        
        registerEventListener(target, event, handler, options) {
            if (!target || !event || !handler) {
                return null;
            }
            const key = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            this.eventListeners.set(key, { target, event, handler, options });
            target.addEventListener(event, handler, options);
            return key;
        },
        
        registerWatcher(stopFn) {
            if (typeof stopFn === 'function') {
                this.watchers.add(stopFn);
            }
            return stopFn;
        },
        
        clearInterval(id) {
            if (this.intervals.has(id)) {
                clearInterval(id);
                this.intervals.delete(id);
            }
        },
        
        clearTimeout(id) {
            if (this.timeouts.has(id)) {
                clearTimeout(id);
                this.timeouts.delete(id);
            }
        },
        
        removeEventListener(key) {
            const listener = this.eventListeners.get(key);
            if (listener) {
                listener.target.removeEventListener(listener.event, listener.handler, listener.options);
                this.eventListeners.delete(key);
            }
        },
        
        cleanupAll() {
            this.intervals.forEach(id => { try { clearInterval(id); } catch(e) {} });
            this.intervals.clear();
            this.timeouts.forEach(id => { try { clearTimeout(id); } catch(e) {} });
            this.timeouts.clear();
            this.eventListeners.forEach((listener) => {
                try { listener.target.removeEventListener(listener.event, listener.handler, listener.options); } catch(e) {}
            });
            this.eventListeners.clear();
            this.watchers.forEach(stopFn => { try { stopFn(); } catch(e) {} });
            this.watchers.clear();
            console.log('✅ 内存资源已清理');
        }
    };
    
    (function setupGlobalCleanup() {
        window.addEventListener('beforeunload', () => CLEANUP_MANAGER.cleanupAll(), { once: true });
        window.addEventListener('unload', () => CLEANUP_MANAGER.cleanupAll(), { once: true });
        const globalTarget = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
        globalTarget.cleanupXuexitongScript = () => CLEANUP_MANAGER.cleanupAll();
        globalTarget.xuexitongScriptStats = () => {
            console.log('📊 资源统计:', {
                intervals: CLEANUP_MANAGER.intervals.size,
                timeouts: CLEANUP_MANAGER.timeouts.size,
                listeners: CLEANUP_MANAGER.eventListeners.size,
                watchers: CLEANUP_MANAGER.watchers.size
            });
        };
    })();
    // =================== 资源清理管理器结束 ===================

    // =================== 防抖和节流工具函数 ===================
    /**
     * 防抖函数 - 延迟执行，在延迟时间内再次调用会重置计时器
     * @param {Function} fn - 要执行的函数
     * @param {number} delay - 延迟时间（毫秒）
     * @param {boolean} immediate - 是否立即执行第一次
     * @returns {Function} 防抖后的函数
     */
    const debounce = (fn, delay = 300, immediate = false) => {
        let timeoutId = null;
        let isInvoked = false; // 标记是否已经立即执行过

        const debouncedFn = function(...args) {
            const context = this;
            
            // 清除之前的定时器
            if (timeoutId !== null) {
                CLEANUP_MANAGER.clearTimeout(timeoutId);
                timeoutId = null;
            }

            // 如果设置为立即执行且还未执行过
            if (immediate && !isInvoked) {
                fn.apply(context, args);
                isInvoked = true;
            }

            // 设置新的定时器
            timeoutId = setTimeout(() => {
                // 如果不是立即执行模式，则在延迟后执行
                if (!immediate) {
                    fn.apply(context, args);
                }
                isInvoked = false;
                timeoutId = null;
            }, delay);

            // 注册到清理管理器
            CLEANUP_MANAGER.registerTimeout(timeoutId);
        };

        // 添加取消方法
        debouncedFn.cancel = () => {
            if (timeoutId !== null) {
                CLEANUP_MANAGER.clearTimeout(timeoutId);
                timeoutId = null;
                isInvoked = false;
            }
        };

        return debouncedFn;
    };

    /**
     * 节流函数 - 限制函数执行频率，在指定时间内只执行一次
     * @param {Function} fn - 要执行的函数
     * @param {number} delay - 节流时间间隔（毫秒）
     * @param {Object} options - 配置选项
     * @param {boolean} options.leading - 是否在开始时执行（默认true）
     * @param {boolean} options.trailing - 是否在结束时执行（默认true）
     * @returns {Function} 节流后的函数
     */
    const throttle = (fn, delay = 300, options = {}) => {
        const { leading = true, trailing = true } = options;
        let lastTime = 0;
        let timeoutId = null;
        let lastArgs = null;
        let lastContext = null;

        const throttledFn = function(...args) {
            const context = this;
            const now = Date.now();
            
            // 如果是第一次调用且不需要leading，则记录时间但不执行
            if (!lastTime && !leading) {
                lastTime = now;
            }

            const remaining = delay - (now - lastTime);

            // 保存最新的参数和上下文
            lastArgs = args;
            lastContext = context;

            if (remaining <= 0 || remaining > delay) {
                // 时间间隔已过，立即执行
                if (timeoutId !== null) {
                    CLEANUP_MANAGER.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastTime = now;
                fn.apply(context, args);
                lastArgs = null;
                lastContext = null;
            } else if (!timeoutId && trailing) {
                // 设置定时器，在剩余时间后执行
                timeoutId = setTimeout(() => {
                    lastTime = leading ? Date.now() : 0;
                    timeoutId = null;
                    if (lastArgs !== null) {
                        fn.apply(lastContext, lastArgs);
                        lastArgs = null;
                        lastContext = null;
                    }
                }, remaining);
                
                // 注册到清理管理器
                CLEANUP_MANAGER.registerTimeout(timeoutId);
            }
        };

        // 添加取消方法
        throttledFn.cancel = () => {
            if (timeoutId !== null) {
                CLEANUP_MANAGER.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastTime = 0;
            lastArgs = null;
            lastContext = null;
        };

        return throttledFn;
    };

    /**
     * 防抖+Promise版本 - 适用于异步操作
     * @param {Function} fn - 异步函数
     * @param {number} delay - 延迟时间
     * @returns {Function} 返回Promise的防抖函数
     */
    const debounceAsync = (fn, delay = 300) => {
        let timeoutId = null;
        let pendingPromise = null;

        return function(...args) {
            const context = this;

            // 清除之前的定时器
            if (timeoutId !== null) {
                CLEANUP_MANAGER.clearTimeout(timeoutId);
            }

            // 如果已有pending的promise，不创建新的
            if (!pendingPromise) {
                pendingPromise = new Promise((resolve, reject) => {
                    timeoutId = setTimeout(async () => {
                        try {
                            const result = await fn.apply(context, args);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        } finally {
                            pendingPromise = null;
                            timeoutId = null;
                        }
                    }, delay);

                    CLEANUP_MANAGER.registerTimeout(timeoutId);
                });
            }

            return pendingPromise;
        };
    };

    // 导出到全局，方便其他地方使用
    if (typeof unsafeWindow !== 'undefined' && unsafeWindow !== window) {
        unsafeWindow.xuexitongUtils = {
            debounce,
            throttle,
            debounceAsync
        };
    }
    
    console.log('✅ 防抖和节流工具函数已加载');
    // =================== 防抖和节流工具函数结束 ===================

    // =================== DOM查询缓存管理器 ===================
    /**
     * DOM查询缓存管理器 - 避免重复的DOM查询，提升性能
     */
    class DOMCache {
        constructor() {
            this.cache = new Map();
            this.observers = new Map(); // MutationObserver缓存
        }

        /**
         * 获取DOM元素（带缓存）
         * @param {string} selector - CSS选择器
         * @param {Element|Document} context - 查询上下文（默认document）
         * @param {boolean} forceRefresh - 是否强制刷新缓存
         * @returns {Element|null}
         */
        get(selector, context = document, forceRefresh = false) {
            const key = this._getKey(selector, context);
            
            if (!forceRefresh && this.cache.has(key)) {
                const cached = this.cache.get(key);
                // 检查缓存的元素是否仍在DOM中
                if (cached && this._isInDOM(cached)) {
                    return cached;
                }
                // 如果元素已不在DOM中，清除缓存
                this.cache.delete(key);
            }

            // 重新查询
            const element = context.querySelector(selector);
            if (element) {
                this.cache.set(key, element);
            }
            return element;
        }

        /**
         * 获取所有匹配的DOM元素（带缓存）
         * @param {string} selector - CSS选择器
         * @param {Element|Document} context - 查询上下文
         * @param {boolean} forceRefresh - 是否强制刷新缓存
         * @returns {NodeList}
         */
        getAll(selector, context = document, forceRefresh = false) {
            const key = this._getKey(selector + ':all', context);
            
            if (!forceRefresh && this.cache.has(key)) {
                return this.cache.get(key);
            }

            const elements = context.querySelectorAll(selector);
            this.cache.set(key, elements);
            return elements;
        }

        /**
         * 通过ID获取元素（带缓存）
         * @param {string} id - 元素ID
         * @param {boolean} forceRefresh - 是否强制刷新
         * @returns {Element|null}
         */
        getById(id, forceRefresh = false) {
            const key = `id:${id}`;
            
            if (!forceRefresh && this.cache.has(key)) {
                const cached = this.cache.get(key);
                if (cached && this._isInDOM(cached)) {
                    return cached;
                }
                this.cache.delete(key);
            }

            const element = document.getElementById(id);
            if (element) {
                this.cache.set(key, element);
            }
            return element;
        }

        /**
         * 通过类名获取元素（带缓存）
         * @param {string} className - 类名
         * @param {Element|Document} context - 上下文
         * @param {boolean} forceRefresh - 是否强制刷新
         * @returns {HTMLCollection}
         */
        getByClass(className, context = document, forceRefresh = false) {
            const key = this._getKey(`class:${className}`, context);
            
            if (!forceRefresh && this.cache.has(key)) {
                return this.cache.get(key);
            }

            const elements = context.getElementsByClassName(className);
            this.cache.set(key, elements);
            return elements;
        }

        /**
         * 监听DOM变化，自动刷新缓存
         * @param {string} selector - 要监听的选择器
         * @param {Element|Document} context - 上下文
         * @param {Function} callback - DOM变化时的回调
         */
        watch(selector, context = document, callback = null) {
            const key = this._getKey(selector, context);
            
            // 如果已经在监听，先停止
            if (this.observers.has(key)) {
                this.unwatch(selector, context);
            }

            const observer = new MutationObserver((mutations) => {
                // DOM发生变化，清除相关缓存
                this.invalidate(selector, context);
                
                if (callback) {
                    callback(mutations);
                }
            });

            // 监听子树变化
            observer.observe(context, {
                childList: true,
                subtree: true
            });

            this.observers.set(key, observer);
            return observer;
        }

        /**
         * 停止监听DOM变化
         * @param {string} selector - 选择器
         * @param {Element|Document} context - 上下文
         */
        unwatch(selector, context = document) {
            const key = this._getKey(selector, context);
            const observer = this.observers.get(key);
            
            if (observer) {
                observer.disconnect();
                this.observers.delete(key);
            }
        }

        /**
         * 使缓存失效
         * @param {string} selector - 选择器（可选，不传则清空所有）
         * @param {Element|Document} context - 上下文
         */
        invalidate(selector = null, context = document) {
            if (selector === null) {
                // 清空所有缓存
                this.cache.clear();
            } else {
                const key = this._getKey(selector, context);
                this.cache.delete(key);
                this.cache.delete(this._getKey(selector + ':all', context));
            }
        }

        /**
         * 预加载常用元素到缓存
         * @param {Array<string>} selectors - 选择器数组
         * @param {Element|Document} context - 上下文
         */
        preload(selectors, context = document) {
            selectors.forEach(selector => {
                this.get(selector, context, true);
            });
        }

        /**
         * 获取缓存统计信息
         * @returns {Object}
         */
        getStats() {
            return {
                cacheSize: this.cache.size,
                observers: this.observers.size,
                cachedSelectors: Array.from(this.cache.keys())
            };
        }

        /**
         * 清理所有缓存和观察器
         */
        cleanup() {
            // 断开所有观察器
            this.observers.forEach(observer => observer.disconnect());
            this.observers.clear();
            
            // 清空缓存
            this.cache.clear();
            
            console.log('✅ DOM缓存已清理');
        }

        /**
         * 生成缓存键
         * @private
         */
        _getKey(selector, context) {
            const contextId = context === document ? 'document' : 
                            context.id || context.className || 'unknown';
            return `${contextId}::${selector}`;
        }

        /**
         * 检查元素是否仍在DOM中
         * @private
         */
        _isInDOM(element) {
            return document.body.contains(element);
        }
    }

    // 创建全局DOM缓存实例
    const domCache = new DOMCache();

    // 页面卸载时清理
    window.addEventListener('beforeunload', () => domCache.cleanup(), { once: true });

    // 注册到全局清理管理器
    if (typeof CLEANUP_MANAGER !== 'undefined') {
        const originalCleanup = CLEANUP_MANAGER.cleanupAll;
        CLEANUP_MANAGER.cleanupAll = function() {
            domCache.cleanup();
            originalCleanup.call(this);
        };
    }

    // 导出到全局
    if (typeof unsafeWindow !== 'undefined' && unsafeWindow !== window) {
        if (!unsafeWindow.xuexitongUtils) {
            unsafeWindow.xuexitongUtils = {};
        }
        unsafeWindow.xuexitongUtils.domCache = domCache;
        unsafeWindow.xuexitongUtils.DOMCache = DOMCache;
    }

    console.log('✅ DOM查询缓存管理器已加载');
    // =================== DOM查询缓存管理器结束 ===================

    var __defProp = Object.defineProperty;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __publicField = (obj, key, value) => {
        __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
        return value;
    };
    /*! Element Plus Icons Vue v2.1.0 */
    var export_helper_default = (sfc, props) => {
        let target = sfc.__vccOpts || sfc;
        for (let [key, val] of props)
            target[key] = val;
        return target;
    };
    var document_remove_vue_vue_type_script_lang_default = {
        name: "DocumentRemove"
    };
    var _hoisted_189 = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    }, _hoisted_289 = /* @__PURE__ */ vue.createElementVNode(
        "path",
        {
            fill: "currentColor",
            d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
        },
        null,
        -1
        /* HOISTED */
    ), _hoisted_388 = [
        _hoisted_289
    ];
    function _sfc_render89(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_189, _hoisted_388);
    }
    var document_remove_default = /* @__PURE__ */ export_helper_default(document_remove_vue_vue_type_script_lang_default, [["render", _sfc_render89], ["__file", "document-remove.vue"]]);
    var full_screen_vue_vue_type_script_lang_default = {
        name: "FullScreen"
    };
    var _hoisted_1118 = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    }, _hoisted_2118 = /* @__PURE__ */ vue.createElementVNode(
        "path",
        {
            fill: "currentColor",
            d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
        },
        null,
        -1
        /* HOISTED */
    ), _hoisted_3117 = [
        _hoisted_2118
    ];
    function _sfc_render118(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1118, _hoisted_3117);
    }
    var full_screen_default = /* @__PURE__ */ export_helper_default(full_screen_vue_vue_type_script_lang_default, [["render", _sfc_render118], ["__file", "full-screen.vue"]]);
    var minus_vue_vue_type_script_lang_default = {
        name: "Minus"
    };
    var _hoisted_1169 = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    }, _hoisted_2169 = /* @__PURE__ */ vue.createElementVNode(
        "path",
        {
            fill: "currentColor",
            d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
        },
        null,
        -1
        /* HOISTED */
    ), _hoisted_3168 = [
        _hoisted_2169
    ];
    function _sfc_render169(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1169, _hoisted_3168);
    }
    var minus_default = /* @__PURE__ */ export_helper_default(minus_vue_vue_type_script_lang_default, [["render", _sfc_render169], ["__file", "minus.vue"]]);
    var position_vue_vue_type_script_lang_default = {
        name: "Position"
    };
    var _hoisted_1203 = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    }, _hoisted_2203 = /* @__PURE__ */ vue.createElementVNode(
        "path",
        {
            fill: "currentColor",
            d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
        },
        null,
        -1
        /* HOISTED */
    ), _hoisted_3202 = [
        _hoisted_2203
    ];
    function _sfc_render203(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1203, _hoisted_3202);
    }
    var position_default = /* @__PURE__ */ export_helper_default(position_vue_vue_type_script_lang_default, [["render", _sfc_render203], ["__file", "position.vue"]]);
    var setting_vue_vue_type_script_lang_default = {
        name: "Setting"
    };
    var _hoisted_1231 = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    }, _hoisted_2231 = /* @__PURE__ */ vue.createElementVNode(
        "path",
        {
            fill: "currentColor",
            d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
        },
        null,
        -1
        /* HOISTED */
    ), _hoisted_3230 = [
        _hoisted_2231
    ];
    function _sfc_render231(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1231, _hoisted_3230);
    }
    var setting_default = /* @__PURE__ */ export_helper_default(setting_vue_vue_type_script_lang_default, [["render", _sfc_render231], ["__file", "setting.vue"]]);
    var view_vue_vue_type_script_lang_default = {
        name: "View"
    };
    var _hoisted_1283 = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    }, _hoisted_2283 = /* @__PURE__ */ vue.createElementVNode(
        "path",
        {
            fill: "currentColor",
            d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
        },
        null,
        -1
        /* HOISTED */
    ), _hoisted_3282 = [
        _hoisted_2283
    ];
    function _sfc_render283(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1283, _hoisted_3282);
    }
    var view_default = /* @__PURE__ */ export_helper_default(view_vue_vue_type_script_lang_default, [["render", _sfc_render283], ["__file", "view.vue"]]);
    var warning_vue_vue_type_script_lang_default = {
        name: "Warning"
    };
    var _hoisted_1288 = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    }, _hoisted_2288 = /* @__PURE__ */ vue.createElementVNode(
        "path",
        {
            fill: "currentColor",
            d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
        },
        null,
        -1
        /* HOISTED */
    ), _hoisted_3287 = [
        _hoisted_2288
    ];
    function _sfc_render288(_ctx, _cache, $props, $setup, $data, $options) {
        return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1288, _hoisted_3287);
    }
    var warning_default = /* @__PURE__ */ export_helper_default(warning_vue_vue_type_script_lang_default, [["render", _sfc_render288], ["__file", "warning.vue"]]);

    const getScriptInfo = () => {
        return {
            name: GM_info.script.name,
            author: GM_info.script.author,
            namespace: GM_info.script.namespace,
            version: GM_info.script.version,
            description: GM_info.script.description
        };
    };
    const useConfigStore = pinia.defineStore("configStore", {
        state: () => {
            const scriptInfo = getScriptInfo();
            const defaultConfig = {
                version: scriptInfo.version,
                isMinus: false,
                position: {
                    x: "800px",
                    y: "200px"
                },
                menuIndex: "0",
                platformName: "cx",
                hideHotkey: "ctrl+alt+l",
                platformParams: {
                    cx: {
                        name: "超星网课助手",
                        parts: [
                            {
                                name: "章节设置",
                                params: [
                                    //     {
                                    //     name: '视频速率',
                                    //     value: 1,
                                    //     type: 'number',
                                    // },
                                    {
                                        name: "章节作业自动提交",
                                        value: true,
                                        type: "boolean"
                                    },
                                    {
                                        name: "是否自动下一章节",
                                        value: true,
                                        type: "boolean"
                                    },
                                    {
                                        name: "只答题，不做其他",
                                        value: false,
                                        type: "boolean"
                                    }
                                ]
                            },
                            {
                                name: "考试设置",
                                params: [{
                                    name: "是否自动切换",
                                    value: true,
                                    type: "boolean"
                                }]
                            }
                        ]
                    },
                    zhs: {
                        name: "智慧树网课助手",
                        parts: [{
                            name: "答题设置",
                            params: [{
                                name: "是否自动切换",
                                value: true,
                                type: "boolean"
                            }]
                        }]
                    },
                    unknown: {
                        name: "未知平台",
                        parts: [{
                            name: "答题设置",
                            params: [{
                                name: "是否自动切换",
                                value: true,
                                type: "boolean"
                            }]
                        }]
                    }
                },
                // 没答案自动选择
                otherParams: {
                    name: "其他参数",
                    params: [
                        //     {
                        //     name: '没答案随机选择',
                        //     value: true,
                        //     type: 'boolean',
                        // },
                        {
                            name: "切换、答题间隔，单位秒",
                            value: 3,
                            type: "number"
                        },
                        {
                            name: "正确率达到多少自动提交",
                            value: 85,
                            type: "number"
                        }
                    ]
                },
                queryApis: [
                    {
                        name: "题库",
                        token: "",
                        url: "http://api.tikuhai.com"
                    }
                    // {
                    //     name: '一之题库',
                    //     token: '',
                    //     url: "http://api.tikuhai.com"
                    // }
                ],
                aiModelConfig: {
                    enabled: false,
                    apiUrl: "",
                    apiKey: "",
                    model: "",
                    temperature: 0.3,
                    maxTokens: CONSTANTS.AI.MAX_TOKENS,
                    timeout: CONSTANTS.AI.DEFAULT_TIMEOUT,  // 超时时间（毫秒）
                    systemPrompt: "你是一个专业的在线教育答题助手。请根据题目内容，直接给出正确答案。对于选择题，只返回选项字母或内容；对于判断题，返回'正确'或'错误'；对于填空题，如果有多个空，请用英文逗号、中文逗号、顿号或空格分隔答案（例如：答案1,答案2,答案3 或 答案1、答案2、答案3 或 答案1 答案2 答案3）；对于简答题，返回简洁准确的答案。不要解释，只返回答案。",
                    answerPriority: "database",  // 答题优先级: "database"(题库优先) 或 "ai"(AI优先)
                    requestFormat: "openai"  // 请求格式: "openai" 或 "custom"
                }
            };
            let globalConfig = defaultConfig;
            const storedConfig = GM_getValue("config");
            if (storedConfig) {
                try {
                    const parsedStoredConfig = JSON.parse(storedConfig);
                    if (scriptInfo.version === parsedStoredConfig.version) {
                        globalConfig = parsedStoredConfig;
                    } else {
                        parsedStoredConfig.version = scriptInfo.version;
                        globalConfig = parsedStoredConfig;
                    }
                } catch (error) {
                    console.error(error);
                }
            }
            GM_setValue("globalConfig", JSON.stringify(globalConfig));
            return globalConfig;
        },
        actions: {}
    });
    const formatDateTime = (dt) => {
        dt.getFullYear();
        dt.getMonth() + 1;
        dt.getDate();
        let hours = dt.getHours();
        let minutes = dt.getMinutes();
        let seconds = dt.getSeconds();
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };
    const pad = (n) => {
        return n < 10 ? "0" + n : n.toString();
    };
    const getDateTime = () => {
        let now = /* @__PURE__ */ new Date();
        return formatDateTime(now);
    };
    const useLogStore = pinia.defineStore("logStore", {
        state: () => ({
            logList: []
        }),
        actions: {
            addLog(message, type) {
                const log = {
                    message,
                    time: getDateTime(),
                    type
                };
                this.logList.push(log);
            }
        }
    });
    const useQuestionStore = pinia.defineStore("questionStore", {
        state: () => ({
            questionList: []
        }),
        actions: {
            addQuestion(question) {
                this.questionList.push(question);
            },
            clearQuestion() {
                this.questionList = [];
            }
        }
    });
    const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
        __name: "index",
        props: {
            logList: {
                type: Array,
                required: true
            }
        },
        setup(__props) {
            return (_ctx, _cache) => {
                const _component_el_text = vue.resolveComponent("el-text");
                const _component_el_divider = vue.resolveComponent("el-divider");
                const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
                return vue.openBlock(), vue.createElementBlock("div", null, [
                    vue.createVNode(_component_el_scrollbar, {
                        always: "",
                        class: "log",
                        "max-height": "230px"
                    }, {
                        default: vue.withCtx(() => [
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.logList, (item, index) => {
                                return vue.openBlock(), vue.createElementBlock("div", { key: index }, [
                                    vue.createVNode(_component_el_text, {
                                        size: "small",
                                        style: { "font-weight": "normal" },
                                        type: "info"
                                    }, {
                                        default: vue.withCtx(() => [
                                            vue.createTextVNode(vue.toDisplayString(item.time), 1)
                                        ]),
                                        _: 2
                                    }, 1024),
                                    vue.createVNode(_component_el_text, null, {
                                        default: vue.withCtx(() => [
                                            vue.createTextVNode(" ")
                                        ]),
                                        _: 1
                                    }),
                                    vue.createVNode(_component_el_text, {
                                        type: item.type ? item.type : "primary",
                                        size: "small",
                                        innerHTML: item.message
                                    }, null, 8, ["type", "innerHTML"]),
                                    vue.createVNode(_component_el_divider, {
                                        "border-style": "dashed",
                                        style: { "margin": "0" }
                                    })
                                ]);
                            }), 128))
                        ]),
                        _: 1
                    })
                ]);
            };
        }
    });
    const _export_sfc = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
            target[key] = val;
        }
        return target;
    };
    const ScriptHome = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d41d5897"]]);
    const _hoisted_1$4 = { class: "setting" };
    const _hoisted_2$4 = { style: { "font-size": "13px" } };
    const _hoisted_3$3 = { style: { "font-size": "13px" } };
    const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
        __name: "index",
        props: {
            globalConfig: {
                type: Object,
                required: true
            }
        },
        setup(__props) {
            return (_ctx, _cache) => {
                const _component_el_divider = vue.resolveComponent("el-divider");
                const _component_el_checkbox = vue.resolveComponent("el-checkbox");
                const _component_el_input = vue.resolveComponent("el-input");
                const _component_el_input_number = vue.resolveComponent("el-input-number");
                const _component_el_form_item = vue.resolveComponent("el-form-item");
                return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.globalConfig.platformParams[__props.globalConfig.platformName].parts, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("div", { key: index }, [
                            vue.createVNode(_component_el_divider, { "border-style": "dashed" }, {
                                default: vue.withCtx(() => [
                                    vue.createElementVNode("span", _hoisted_2$4, vue.toDisplayString(item.name), 1)
                                ]),
                                _: 2
                            }, 1024),
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.params, (param, index2) => {
                                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                                    param.type === "boolean" ? (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                                        style: { "margin-bottom": "6px" },
                                        key: index2,
                                        modelValue: param.value,
                                        "onUpdate:modelValue": ($event) => param.value = $event,
                                        label: param.name,
                                        size: "small"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])) : (vue.openBlock(), vue.createBlock(_component_el_form_item, {
                                        key: 1,
                                        label: param.name,
                                        required: ""
                                    }, {
                                        default: vue.withCtx(() => [
                                            vue.createVNode(_component_el_input_number, {
                                                modelValue: param.value,
                                                "onUpdate:modelValue": ($event) => param.value = $event,
                                                min: 3e3,
                                                step: 1e3,
                                                "controls-position": "right",
                                                size: "small"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 2
                                    }, 1032, ["label"]))
                                ], 64);
                            }), 256))
                        ]);
                    }), 128)),
                    vue.createElementVNode("div", null, [
                        vue.createVNode(_component_el_divider, { "border-style": "dashed" }, {
                            default: vue.withCtx(() => [
                                vue.createElementVNode("span", _hoisted_3$3, vue.toDisplayString(__props.globalConfig.otherParams.name), 1)
                            ]),
                            _: 1
                        }),
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.globalConfig.otherParams.params, (item, index) => {
                            return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
                                item.type === "boolean" ? (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                                    key: 0,
                                    modelValue: item.value,
                                    "onUpdate:modelValue": ($event) => item.value = $event,
                                    size: "small"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : item.type === "string" ? (vue.openBlock(), vue.createBlock(_component_el_form_item, {
                                    key: 1,
                                    style: { "margin-top": "6px" },
                                    label: item.name,
                                    required: "",
                                    size: "small"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input, {
                                            modelValue: item.value,
                                            "onUpdate:modelValue": ($event) => item.value = $event,
                                            placeholder: "例如: ctrl+alt+l",
                                            size: "small"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 2
                                }, 1032, ["label"])) : (vue.openBlock(), vue.createBlock(_component_el_form_item, {
                                    key: 2,
                                    style: { "margin-top": "6px" },
                                    label: item.name,
                                    required: "",
                                    size: "small"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input_number, {
                                            modelValue: item.value,
                                            "onUpdate:modelValue": ($event) => item.value = $event,
                                            min: 3,
                                            max: 100,
                                            step: 1,
                                            size: "small"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 2
                                }, 1032, ["label"]))
                            ], 64);
                        }), 128))
                    ]),
                    // 快捷键设置部分
                    vue.createElementVNode("div", null, [
                        vue.createVNode(_component_el_divider, { "border-style": "dashed" }, {
                            default: vue.withCtx(() => [
                                vue.createElementVNode("span", { style: { "font-size": "13px" } }, "快捷键设置")
                            ]),
                            _: 1
                        }),
                        vue.createVNode(_component_el_form_item, {
                            label: "隐藏/显示窗口",
                            style: { "margin-top": "6px" },
                            size: "small"
                        }, {
                            default: vue.withCtx(() => [
                                vue.createVNode(_component_el_input, {
                                    modelValue: __props.globalConfig.hideHotkey,
                                    "onUpdate:modelValue": ($event) => __props.globalConfig.hideHotkey = $event,
                                    placeholder: "例如: ctrl+alt+l",
                                    size: "small",
                                    style: { "width": "150px" }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 1
                        })
                    ])
                ]);
            };
        }
    });
    const ScriptSetting = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4489784f"]]);
    const _hoisted_1$3 = { class: "question_table" };
    const _hoisted_2$3 = ["innerHTML"];
    const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
        __name: "QuestionTable",
        props: {
            questionList: {
                type: Array,
                required: true
            }
        },
        setup(__props) {
            const configStore = useConfigStore();
            return (_ctx, _cache) => {
                const _component_el_button = vue.resolveComponent("el-button");
                const _component_el_input = vue.resolveComponent("el-input");
                const _component_el_table_column = vue.resolveComponent("el-table-column");
                const _component_el_table = vue.resolveComponent("el-table");
                const _component_el_empty = vue.resolveComponent("el-empty");
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                    vue.createVNode(_component_el_input, {
                        style: { "font-size": "12px" },
                        modelValue: vue.unref(configStore).queryApis[0].token,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).queryApis[0].token = $event),
                        placeholder: "获取的密钥的密钥填到这里即可，题库问题与脚本无关，确定能搜到再获取"
                    }, {
                        prepend: vue.withCtx(() => [
                            vue.createVNode(_component_el_button, { style: { "border-radius": "0" } }, {
                                default: vue.withCtx(() => [
                                    vue.createTextVNode("密钥")
                                ]),
                                _: 1
                            })
                        ]),
                        _: 1
                    }, 8, ["modelValue"]),
                    vue.withDirectives(vue.createElementVNode("div", _hoisted_1$3, [
                        vue.createVNode(_component_el_table, {
                            stripe: "",
                            data: __props.questionList,
                            "max-height": "400",
                            style: { "font-size": "12px" }
                        }, {
                            default: vue.withCtx(() => [
                                vue.createVNode(_component_el_table_column, {
                                    type: "index",
                                    width: "40"
                                }),
                                vue.createVNode(_component_el_table_column, {
                                    prop: "title",
                                    label: "题目",
                                    width: "370"
                                }),
                                vue.createVNode(_component_el_table_column, {
                                    style: { "background-color": "red" },
                                    prop: "answer",
                                    label: "答案",
                                    width: "215"
                                }, {
                                    default: vue.withCtx((scope) => [
                                        vue.createElementVNode("div", {
                                            innerHTML: scope.row.answer.join()
                                        }, null, 8, _hoisted_2$3)
                                    ]),
                                    _: 1
                                })
                            ]),
                            _: 1
                        }, 8, ["data"])
                    ], 512), [
                        [vue.vShow, __props.questionList.length]
                    ]),
                    vue.withDirectives(vue.createElementVNode("div", null, [
                        vue.createVNode(_component_el_empty, { description: "该页面无需答题" })
                    ], 512), [
                        [vue.vShow, !__props.questionList.length]
                    ])
                ], 64);
            };
        }
    });
    const QuestionTable = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-18523ca7"]]);
    const _sfc_main$5 = {};
    const _hoisted_1$2 = { style: { "font-size": "12px" } };
    const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("p", null, "1、脚本功能完全免费，不存在付费情况，进入相应页面即可使用。", -1);
    const _hoisted_3$2 = /* @__PURE__ */ vue.createElementVNode("p", null, '2、脚本没有开发自己到题库，而是接入了多个第三方题库，如需填写密钥，依次操作：[1] 点击标签页"答题" --> [2] 在文本框内填写 --> [3] 刷新', -1);
    const _hoisted_4$1 = /* @__PURE__ */ vue.createElementVNode("p", { style: { "font-weight": "500" } }, "务必注意：", -1);
    const _hoisted_5$1 = /* @__PURE__ */ vue.createElementVNode("p", null, "-- 脚本出现相关问题，请在脚本反馈区反馈，或者私信作者修复。", -1);
    const _hoisted_6$1 = /* @__PURE__ */ vue.createElementVNode("p", null, "-- 题库密钥请确认能够搜索到题目再获取，题库均为网络收集的第三方题库，出现任何问题与脚本无关。如果你是程序员，可以自行接入自己的题库，这里不提供任何教程，也不会回复任何询问，请自行查看源代码修改即可，不会改的绕道。", -1);
    const _hoisted_7$1 = [
        _hoisted_2$2,
        _hoisted_3$2,
        _hoisted_4$1,
        _hoisted_5$1,
        _hoisted_6$1
    ];
    function _sfc_render$1(_ctx, _cache) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, _hoisted_7$1);
    }
    const Tutorial = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
    const _sfc_main$4 = {};
    const _hoisted_1$1 = { style: { "font-size": "12px" } };
    const _hoisted_2$1 = /* @__PURE__ */ vue.createElementVNode("p", null, "1、本脚本仅供学习和研究目的使用，并应在24小时内删除。脚本的使用不应违反任何法律法规及学术道德标准。", -1);
    const _hoisted_3$1 = /* @__PURE__ */ vue.createElementVNode("p", null, "2、用户在使用脚本时，必须遵守所有适用的法律法规。任何由于使用脚本而引起的违法行为或不当行为，其产生的一切后果由用户自行承担。", -1);
    const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("p", null, "3、开发者不对用户使用脚本所产生的任何直接或间接后果负责。用户应自行评估使用脚本的风险，并对任何可能的负面影响承担全责。", -1);
    const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("p", null, "4、本声明的目的在于提醒用户注意相关法律法规与风险，确保用户在明智、合法的前提下使用脚本。", -1);
    const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("p", null, "5、如用户在使用脚本的过程中有任何疑问，建议立即停止使用，并删除所有相关文件。", -1);
    const _hoisted_7 = /* @__PURE__ */ vue.createElementVNode("p", null, "6、本免责声明的最终解释权归脚本开发者所有。", -1);
    const _hoisted_8 = [
        _hoisted_2$1,
        _hoisted_3$1,
        _hoisted_4,
        _hoisted_5,
        _hoisted_6,
        _hoisted_7
    ];
    function _sfc_render(_ctx, _cache) {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, _hoisted_8);
    }
    const ScriptTip = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);

    // AI模型设置组件
    const _sfc_main$ai = /* @__PURE__ */ vue.defineComponent({
        __name: "AIModelSetting",
        props: {
            aiConfig: {
                type: Object,
                required: true
            }
        },
        setup(__props) {
            // 确保 props 是响应式的
            const props = __props;

            // 使用 reactive 确保配置对象是响应式的
            const config = vue.reactive(props.aiConfig || {
                enabled: false,
                requestFormat: "openai",
                apiUrl: "",
                apiKey: "",
                model: "",
                temperature: 0.3,
                maxTokens: CONSTANTS.AI.MAX_TOKENS,
                timeout: CONSTANTS.AI.DEFAULT_TIMEOUT,
                systemPrompt: "你是一个专业的在线教育答题助手。请根据题目内容，直接给出正确答案。对于选择题，只返回选项字母或内容；对于判断题，返回'正确'或'错误'；对于填空题，如果有多个空，请用英文逗号分隔答案（例如：答案1,答案2,答案3）；对于简答题，返回简洁准确的答案。不要解释，只返回答案。",
                answerPriority: "database"
            });

            // 确保 requestFormat 有默认值
            if (!config.requestFormat) {
                config.requestFormat = "openai";
            }

            // 监听配置变化并同步到原始对象
            const stopWatch = vue.watchEffect(() => {
                if (props.aiConfig) {
                    Object.assign(props.aiConfig, config);
                }
            });
            CLEANUP_MANAGER.registerWatcher(stopWatch);
            vue.onUnmounted(() => {
                stopWatch();
            });

            return (_ctx, _cache) => {
                const _component_el_switch = vue.resolveComponent("el-switch");
                const _component_el_form_item = vue.resolveComponent("el-form-item");
                const _component_el_radio_group = vue.resolveComponent("el-radio-group");
                const _component_el_radio = vue.resolveComponent("el-radio");
                const _component_el_input = vue.resolveComponent("el-input");
                const _component_el_input_number = vue.resolveComponent("el-input-number");
                const _component_el_checkbox = vue.resolveComponent("el-checkbox");
                const _component_el_form = vue.resolveComponent("el-form");
                const _component_el_alert = vue.resolveComponent("el-alert");

                return vue.openBlock(), vue.createElementBlock("div", { class: "ai-model-setting", style: { "font-size": "12px" } }, [
                    vue.createVNode(_component_el_form, {
                        "label-width": "100px",
                        size: "small"
                    }, {
                        default: vue.withCtx(() => [
                            vue.createVNode(_component_el_form_item, {
                                label: "启用AI模型"
                            }, {
                                default: vue.withCtx(() => [
                                    vue.createVNode(_component_el_switch, {
                                        modelValue: config.enabled,
                                        "onUpdate:modelValue": ($event) => config.enabled = $event
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                            }),
                            config.enabled ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                                vue.createVNode(_component_el_form_item, {
                                    label: "请求格式"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_radio_group, {
                                            modelValue: config.requestFormat,
                                            "onUpdate:modelValue": ($event) => config.requestFormat = $event
                                        }, {
                                            default: vue.withCtx(() => [
                                                vue.createVNode(_component_el_radio, {
                                                    label: "openai"
                                                }, {
                                                    default: vue.withCtx(() => [
                                                        vue.createTextVNode("OpenAI兼容格式（推荐）")
                                                    ]),
                                                    _: 1
                                                }),
                                                vue.createVNode(_component_el_radio, {
                                                    label: "custom"
                                                }, {
                                                    default: vue.withCtx(() => [
                                                        vue.createTextVNode("自定义格式")
                                                    ]),
                                                    _: 1
                                                })
                                            ]),
                                            _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_form_item, {
                                    label: "API地址"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input, {
                                            modelValue: config.apiUrl,
                                            "onUpdate:modelValue": ($event) => {
                                                let url = $event;
                                                // 自动删除结尾的斜杠
                                                if (url.endsWith('/')) {
                                                    url = url.slice(0, -1);
                                                }
                                                // 智能处理 API URL
                                                if (url && url.length > 0) {
                                                    // 检查是否已经是完整的 API 端点
                                                    const hasCompletePath = url.includes('/chat/completions') ||
                                                                          url.includes('/v1/chat/completions') ||
                                                                          url.includes('/completions') ||
                                                                          url.includes('/messages') ||
                                                                          url.includes('/generate') ||
                                                                          url.includes('/api/') ||
                                                                          url.endsWith('/v1') ||
                                                                          url.endsWith('/v2') ||
                                                                          url.endsWith('/v3');

                                                    // 如果URL看起来只是域名或基础路径，自动添加标准路径
                                                    if (!hasCompletePath) {
                                                        // 判断是否是纯域名（如 https://api.example.com）
                                                        try {
                                                            const urlObj = new URL(url);
                                                            // 如果路径只有根路径，添加标准 OpenAI 路径
                                                            // 但对于本地服务（带端口号），需要特别小心
                                                            const isLocalHost = urlObj.hostname === 'localhost' ||
                                                                              urlObj.hostname === '127.0.0.1' ||
                                                                              urlObj.hostname.startsWith('192.168.') ||
                                                                              urlObj.hostname.startsWith('10.');

                                                            // 对于本地服务，只有明确是根路径时才添加
                                                            // 对于公网服务，路径很短时也添加
                                                            if (urlObj.pathname === '/') {
                                                                url = url + '/v1/chat/completions';
                                                            } else if (!isLocalHost && urlObj.pathname.length <= 3) {
                                                                url = url + '/v1/chat/completions';
                                                            }
                                                        } catch (e) {
                                                            // 如果不是有效的URL，保持原样
                                                        }
                                                    }
                                                }
                                                config.apiUrl = url;
                                            },
                                            placeholder: "如: https://api.openai.com 或完整路径"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_form_item, {
                                    label: "API密钥"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input, {
                                            modelValue: config.apiKey,
                                            "onUpdate:modelValue": ($event) => config.apiKey = $event,
                                            type: "password",
                                            "show-password": "",
                                            placeholder: "输入API密钥"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_form_item, {
                                    label: "模型名称"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input, {
                                            modelValue: config.model,
                                            "onUpdate:modelValue": ($event) => config.model = $event,
                                            placeholder: "如: gpt-3.5-turbo, glm-4, qwen-turbo等"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_form_item, {
                                    label: "温度参数"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input_number, {
                                            modelValue: config.temperature,
                                            "onUpdate:modelValue": ($event) => config.temperature = $event,
                                            min: 0,
                                            max: 2,
                                            step: 0.1,
                                            precision: 1
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_form_item, {
                                    label: "超时时间(秒)"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input_number, {
                                            modelValue: config.timeout / 1000,
                                            "onUpdate:modelValue": ($event) => config.timeout = $event * 1000,
                                            min: 10,
                                            max: 120,
                                            step: 5
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_form_item, {
                                    label: "系统提示词"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_input, {
                                            modelValue: config.systemPrompt,
                                            "onUpdate:modelValue": ($event) => config.systemPrompt = $event,
                                            type: "textarea",
                                            rows: 3,
                                            placeholder: "设置AI的行为方式"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_form_item, {
                                    label: "答题优先级"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createVNode(_component_el_radio_group, {
                                            modelValue: config.answerPriority,
                                            "onUpdate:modelValue": ($event) => config.answerPriority = $event
                                        }, {
                                            default: vue.withCtx(() => [
                                                vue.createVNode(_component_el_radio, {
                                                    label: "database"
                                                }, {
                                                    default: vue.withCtx(() => [
                                                        vue.createTextVNode("题库优先")
                                                    ]),
                                                    _: 1
                                                }),
                                                vue.createVNode(_component_el_radio, {
                                                    label: "ai"
                                                }, {
                                                    default: vue.withCtx(() => [
                                                        vue.createTextVNode("AI优先")
                                                    ]),
                                                    _: 1
                                                })
                                            ]),
                                            _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                })
                            ], 64)) : vue.createCommentVNode("", true)
                        ]),
                        _: 1
                    })
                ]);
            };
        }
    });
    const AIModelSetting = /* @__PURE__ */ _export_sfc(_sfc_main$ai, [["__scopeId", "data-v-ai-model"]]);

    // Markdown转换函数 - 将Markdown转换为普通文本格式
    const convertMarkdownToPlainText = (markdown) => {
        if (!markdown) return '';

        // 转换各种Markdown元素为普通文本
        let plainText = markdown
            // 移除代码块
            .replace(/```[\s\S]*?```/g, '')
            // 转换行内代码
            .replace(/`([^`]+)`/g, '$1')
            // 转换粗体
            .replace(/\*\*([^*]+)\*\*/g, '$1')
            .replace(/__([^_]+)__/g, '$1')
            // 转换斜体
            .replace(/\*([^*]+)\*/g, '$1')
            .replace(/_([^_]+)_/g, '$1')
            // 转换标题 (移除#，但保留换行)
            .replace(/^#+\s+(.+)$/gm, '$1')
            // 转换无序列表
            .replace(/^[\*\-\+]\s+(.+)$/gm, '• $1')
            // 转换有序列表
            .replace(/^\d+\.\s+(.+)$/gm, '• $1')
            // 转换链接 [text](url) -> text
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            // 转换图片 ![alt](url) -> alt
            .replace(/!\[([^\]]*)\]\([^)]+\)/g, '[$1]')
            // 移除多余的换行，但保留适当的段落分隔
            .replace(/\n\s*\n\s*\n/g, '\n\n')
            // 移除行首行尾的空格
            .replace(/^\s+|\s+$/g, '')
            .replace(/\n\s+/g, '\n')
            // 转换水平线
            .replace(/^[\*\-\_]{3,}$/gm, '');

        return plainText.trim();
    };

    // AI聊天组件
    const _sfc_main$chat = /* @__PURE__ */ vue.defineComponent({
        __name: "AIChat",
        setup() {
            const userInput = vue.ref("");
            const chatHistory = vue.ref([]);
            const isLoading = vue.ref(false);
            const isTyping = vue.ref(false);
            const typingSpeed = 15; // 打字速度（毫秒/字符）

            // 使用计算属性获取配置存储
            const configStore = vue.computed(() => {
                try {
                    return useConfigStore();
                } catch (e) {
                    console.warn('无法获取配置存储:', e);
                    return {
                        aiModelConfig: {
                            enabled: false,
                            apiKey: "",
                            apiUrl: ""
                        }
                    };
                }
            });

            const sendMessage = async () => {
                if (!userInput.value.trim() || isLoading.value) return;

                const message = userInput.value;
                chatHistory.value.push({ role: "user", content: message });
                userInput.value = "";
                isLoading.value = true;
                isTyping.value = true;

                // 添加一个空的AI消息，用于流式更新
                const aiMessageIndex = chatHistory.value.length;
                chatHistory.value.push({ role: "assistant", content: "", displayContent: "" });

                let fullContent = "";
                let displayedChars = 0;
                let typingTimer = null;

                // 打字机效果函数
                const typeWriter = () => {
                    if (displayedChars < fullContent.length) {
                        chatHistory.value[aiMessageIndex].displayContent = fullContent.substring(0, displayedChars + 1);
                        displayedChars++;
                        typingTimer = setTimeout(typeWriter, typingSpeed);

                        // 滚动到底部
                        vue.nextTick(() => {
                            const chatBox = document.querySelector('.ai-chat-box');
                            if (chatBox) {
                                chatBox.scrollTop = chatBox.scrollHeight;
                            }
                        });
                    } else {
                        isTyping.value = false;
                        if (typingTimer) {
                            clearTimeout(typingTimer);
                        }
                    }
                };

                try {
                    // 使用流式AI请求
                    const result = await makeStreamAIRequest(message, null, (partialContent) => {
                        // 更新完整内容
                        const plainContent = convertMarkdownToPlainText(partialContent);
                        fullContent = plainContent;
                        chatHistory.value[aiMessageIndex].content = plainContent;

                        // 如果还没开始打字或已经显示完毕，启动打字机效果
                        if (!typingTimer && displayedChars < fullContent.length) {
                            typeWriter();
                        }
                    });

                    // 确保最终显示完整内容
                    if (result.success && result.answer) {
                        fullContent = result.answer;
                        chatHistory.value[aiMessageIndex].content = result.answer;
                        if (!typingTimer && displayedChars < fullContent.length) {
                            typeWriter();
                        }
                    }

                    // 滚动到底部
                    vue.nextTick(() => {
                        const container = document.querySelector(".chat-messages");
                        if (container) {
                            container.scrollTop = container.scrollHeight;
                        }
                    });

                    if (!result.success) {
                        // 如果流式请求失败，停止打字机效果
                        if (typingTimer) {
                            clearTimeout(typingTimer);
                        }
                        isTyping.value = false;
                        // 移除空的AI消息并添加错误消息
                        chatHistory.value.pop();
                        chatHistory.value.push({ role: "error", content: result.error });
                    }
                } catch (error) {
                    console.error("流式请求异常:", error);
                    // 停止打字机效果
                    if (typingTimer) {
                        clearTimeout(typingTimer);
                    }
                    isTyping.value = false;
                    // 移除空的AI消息并添加错误消息
                    chatHistory.value.pop();
                    chatHistory.value.push({ role: "error", content: "请求失败" });
                }

                isLoading.value = false;

                // 最终滚动到底部
                vue.nextTick(() => {
                    const container = document.querySelector(".chat-messages");
                    if (container) {
                        container.scrollTop = container.scrollHeight;
                    }
                });
            };

            const clearChat = () => {
                chatHistory.value = [];
            };

            return (_ctx, _cache) => {
                const _component_el_alert = vue.resolveComponent("el-alert");
                const _component_el_text = vue.resolveComponent("el-text");
                const _component_el_button = vue.resolveComponent("el-button");
                const _component_el_input = vue.resolveComponent("el-input");
                const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");

                return vue.openBlock(), vue.createElementBlock("div", {
                    class: "ai-chat",
                    style: { "font-size": "12px" }
                }, [
                    !configStore.value?.aiModelConfig?.enabled ? (
                        vue.openBlock(),
                            vue.createBlock(_component_el_alert, {
                                key: 0,
                                title: "请先在AI模型设置中启用并配置AI",
                                type: "warning",
                                closable: false,
                                style: { "margin-bottom": "10px" }
                            })
                    ) : (
                        vue.openBlock(),
                            vue.createElementBlock("div", { key: 1 }, [
                                vue.createVNode(_component_el_scrollbar, {
                                    height: "300px",
                                    style: { "border": "1px solid #e4e7ed", "background": "#f5f7fa", "padding": "10px", "margin-bottom": "10px" }
                                }, {
                                    default: vue.withCtx(() => [
                                        chatHistory.value.length === 0 ? (
                                            vue.openBlock(),
                                                vue.createElementBlock("div", {
                                                    key: 0,
                                                    style: { "text-align": "center", "color": "#909399" }
                                                }, "开始与AI对话")
                                        ) : (
                                            vue.openBlock(true),
                                                vue.createElementBlock(vue.Fragment, { key: 1 },
                                                    vue.renderList(chatHistory.value, (msg, index) => {
                                                        return vue.openBlock(), vue.createElementBlock("div", {
                                                            key: index,
                                                            style: { "margin-bottom": "10px" }
                                                        }, [
                                                            msg.role === 'user' ? (
                                                                vue.openBlock(),
                                                                    vue.createElementBlock("div", {
                                                                        key: 0,
                                                                        style: { "text-align": "right" }
                                                                    }, [
                                                                        vue.createElementVNode("span", {
                                                                            style: {
                                                                                "background": "#409eff",
                                                                                "color": "white",
                                                                                "padding": "5px 10px",
                                                                                "border-radius": "10px",
                                                                                "display": "inline-block",
                                                                                "max-width": "80%"
                                                                            }
                                                                        }, vue.toDisplayString(msg.content), 1)
                                                                    ])
                                                            ) : msg.role === 'assistant' ? (
                                                                vue.openBlock(),
                                                                    vue.createElementBlock("div", {
                                                                        key: 1,
                                                                        style: { "text-align": "left" }
                                                                    }, [
                                                                        vue.createElementVNode("span", {
                                                                            style: {
                                                                                "background": "#67c23a",
                                                                                "color": "white",
                                                                                "padding": "5px 10px",
                                                                                "border-radius": "10px",
                                                                                "display": "inline-block",
                                                                                "max-width": "80%",
                                                                                "white-space": "pre-wrap"
                                                                            },
                                                                            class: isTyping.value && index === chatHistory.value.length - 1 ? "typing-animation" : ""
                                                                        }, vue.toDisplayString(msg.displayContent || msg.content), 1)
                                                                    ])
                                                            ) : msg.role === 'error' ? (
                                                                vue.openBlock(),
                                                                    vue.createElementBlock("div", {
                                                                        key: 2,
                                                                        style: { "text-align": "left" }
                                                                    }, [
                                                                        vue.createElementVNode("span", {
                                                                            style: {
                                                                                "background": "#f56c6c",
                                                                                "color": "white",
                                                                                "padding": "5px 10px",
                                                                                "border-radius": "10px",
                                                                                "display": "inline-block"
                                                                            }
                                                                        }, "错误: " + vue.toDisplayString(msg.content), 1)
                                                                    ])
                                                            ) : vue.createCommentVNode("", true)
                                                        ]);
                                                    }),
                                                    128
                                                )
                                        ),
                                        isLoading.value && chatHistory.value.length > 0 && chatHistory.value[chatHistory.value.length - 1].role === "user" ? (
                                            vue.openBlock(),
                                                vue.createElementBlock("div", {
                                                    key: 2,
                                                    style: { "text-align": "center", "margin-top": "10px" }
                                                }, [
                                                    vue.createVNode(_component_el_text, { type: "info" }, {
                                                        default: vue.withCtx(() => [
                                                            vue.createTextVNode("AI正在思考...")
                                                        ]),
                                                        _: 1
                                                    })
                                                ])
                                        ) : vue.createCommentVNode("", true)
                                    ]),
                                    _: 1
                                }),
                                vue.createVNode(_component_el_input, {
                                    modelValue: userInput.value,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => userInput.value = $event),
                                    placeholder: "输入问题",
                                    onKeyup: vue.withKeys(sendMessage, ["enter"]),
                                    disabled: isLoading.value,
                                    style: { "margin-bottom": "10px" }
                                }, {
                                    append: vue.withCtx(() => [
                                        vue.createVNode(_component_el_button, {
                                            onClick: sendMessage,
                                            loading: isLoading.value
                                        }, {
                                            default: vue.withCtx(() => [
                                                vue.createTextVNode("发送")
                                            ]),
                                            _: 1
                                        }, 8, ["loading"])
                                    ]),
                                    _: 1
                                }, 8, ["modelValue", "disabled"]),
                                vue.createVNode(_component_el_button, {
                                    onClick: clearChat,
                                    size: "small",
                                    type: "danger"
                                }, {
                                    default: vue.withCtx(() => [
                                        vue.createTextVNode("清空对话")
                                    ]),
                                    _: 1
                                })
                            ])
                    )
                ]);
            };
        }
    });
    const AIChat = /* @__PURE__ */ _export_sfc(_sfc_main$chat, [["__scopeId", "data-v-ai-chat"]]);

    function isFunction(value) {
        return typeof value === "function";
    }
    function hasLift(source) {
        return isFunction(source === null || source === void 0 ? void 0 : source.lift);
    }
    function operate(init) {
        return function(source) {
            if (hasLift(source)) {
                return source.lift(function(liftedSource) {
                    try {
                        return init(liftedSource, this);
                    } catch (err) {
                        this.error(err);
                    }
                });
            }
            throw new TypeError("Unable to lift unknown Observable type");
        };
    }
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
        } || function(d2, b2) {
            for (var p in b2)
                if (Object.prototype.hasOwnProperty.call(b2, p))
                    d2[p] = b2[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() {
                if (t[0] & 1)
                    throw t[1];
                return t[1];
            }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function() {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        } catch (error) {
            e = { error };
        } finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            } finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spreadArray(to, from2, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from2.length, ar; i < l; i++) {
                if (ar || !(i in from2)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from2, 0, i);
                    ar[i] = from2[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from2));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
            return this;
        }, i;
        function awaitReturn(f) {
            return function(v) {
                return Promise.resolve(v).then(f, reject);
            };
        }
        function verb(n, f) {
            if (g[n]) {
                i[n] = function(v) {
                    return new Promise(function(a, b) {
                        q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                };
                if (f)
                    i[n] = f(i[n]);
            }
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length)
                resume(q[0][0], q[0][1]);
        }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i);
        function verb(n) {
            i[n] = o[n] && function(v) {
                return new Promise(function(resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
                resolve({ value: v2, done: d });
            }, reject);
        }
    }
    typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    var isArrayLike = function(x) {
        return x && typeof x.length === "number" && typeof x !== "function";
    };
    function isPromise(value) {
        return isFunction(value === null || value === void 0 ? void 0 : value.then);
    }
    function createErrorClass(createImpl) {
        var _super = function(instance) {
            Error.call(instance);
            instance.stack = new Error().stack;
        };
        var ctorFunc = createImpl(_super);
        ctorFunc.prototype = Object.create(Error.prototype);
        ctorFunc.prototype.constructor = ctorFunc;
        return ctorFunc;
    }
    var UnsubscriptionError = createErrorClass(function(_super) {
        return function UnsubscriptionErrorImpl(errors) {
            _super(this);
            this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
                return i + 1 + ") " + err.toString();
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = errors;
        };
    });
    function arrRemove(arr, item) {
        if (arr) {
            var index = arr.indexOf(item);
            0 <= index && arr.splice(index, 1);
        }
    }
    var Subscription = function() {
        function Subscription2(initialTeardown) {
            this.initialTeardown = initialTeardown;
            this.closed = false;
            this._parentage = null;
            this._finalizers = null;
        }
        Subscription2.prototype.unsubscribe = function() {
            var e_1, _a, e_2, _b;
            var errors;
            if (!this.closed) {
                this.closed = true;
                var _parentage = this._parentage;
                if (_parentage) {
                    this._parentage = null;
                    if (Array.isArray(_parentage)) {
                        try {
                            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                                var parent_1 = _parentage_1_1.value;
                                parent_1.remove(this);
                            }
                        } catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        } finally {
                            try {
                                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                                    _a.call(_parentage_1);
                            } finally {
                                if (e_1)
                                    throw e_1.error;
                            }
                        }
                    } else {
                        _parentage.remove(this);
                    }
                }
                var initialFinalizer = this.initialTeardown;
                if (isFunction(initialFinalizer)) {
                    try {
                        initialFinalizer();
                    } catch (e) {
                        errors = e instanceof UnsubscriptionError ? e.errors : [e];
                    }
                }
                var _finalizers = this._finalizers;
                if (_finalizers) {
                    this._finalizers = null;
                    try {
                        for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                            var finalizer = _finalizers_1_1.value;
                            try {
                                execFinalizer(finalizer);
                            } catch (err) {
                                errors = errors !== null && errors !== void 0 ? errors : [];
                                if (err instanceof UnsubscriptionError) {
                                    errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                                } else {
                                    errors.push(err);
                                }
                            }
                        }
                    } catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    } finally {
                        try {
                            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                                _b.call(_finalizers_1);
                        } finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                }
                if (errors) {
                    throw new UnsubscriptionError(errors);
                }
            }
        };
        Subscription2.prototype.add = function(teardown) {
            var _a;
            if (teardown && teardown !== this) {
                if (this.closed) {
                    execFinalizer(teardown);
                } else {
                    if (teardown instanceof Subscription2) {
                        if (teardown.closed || teardown._hasParent(this)) {
                            return;
                        }
                        teardown._addParent(this);
                    }
                    (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
                }
            }
        };
        Subscription2.prototype._hasParent = function(parent) {
            var _parentage = this._parentage;
            return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
        };
        Subscription2.prototype._addParent = function(parent) {
            var _parentage = this._parentage;
            this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
        };
        Subscription2.prototype._removeParent = function(parent) {
            var _parentage = this._parentage;
            if (_parentage === parent) {
                this._parentage = null;
            } else if (Array.isArray(_parentage)) {
                arrRemove(_parentage, parent);
            }
        };
        Subscription2.prototype.remove = function(teardown) {
            var _finalizers = this._finalizers;
            _finalizers && arrRemove(_finalizers, teardown);
            if (teardown instanceof Subscription2) {
                teardown._removeParent(this);
            }
        };
        Subscription2.EMPTY = function() {
            var empty = new Subscription2();
            empty.closed = true;
            return empty;
        }();
        return Subscription2;
    }();
    Subscription.EMPTY;
    function isSubscription(value) {
        return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
    }
    function execFinalizer(finalizer) {
        if (isFunction(finalizer)) {
            finalizer();
        } else {
            finalizer.unsubscribe();
        }
    }
    var config = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: false,
        useDeprecatedNextContext: false
    };
    var timeoutProvider = {
        setTimeout: function(handler, timeout) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
        },
        clearTimeout: function(handle) {
            return (clearTimeout)(handle);
        },
        delegate: void 0
    };
    function reportUnhandledError(err) {
        timeoutProvider.setTimeout(function() {
            {
                throw err;
            }
        });
    }
    function noop() {
    }
    function errorContext(cb) {
        {
            cb();
        }
    }
    var Subscriber = function(_super) {
        __extends(Subscriber2, _super);
        function Subscriber2(destination) {
            var _this = _super.call(this) || this;
            _this.isStopped = false;
            if (destination) {
                _this.destination = destination;
                if (isSubscription(destination)) {
                    destination.add(_this);
                }
            } else {
                _this.destination = EMPTY_OBSERVER;
            }
            return _this;
        }
        Subscriber2.create = function(next, error, complete) {
            return new SafeSubscriber(next, error, complete);
        };
        Subscriber2.prototype.next = function(value) {
            if (this.isStopped)
                ;
            else {
                this._next(value);
            }
        };
        Subscriber2.prototype.error = function(err) {
            if (this.isStopped)
                ;
            else {
                this.isStopped = true;
                this._error(err);
            }
        };
        Subscriber2.prototype.complete = function() {
            if (this.isStopped)
                ;
            else {
                this.isStopped = true;
                this._complete();
            }
        };
        Subscriber2.prototype.unsubscribe = function() {
            if (!this.closed) {
                this.isStopped = true;
                _super.prototype.unsubscribe.call(this);
                this.destination = null;
            }
        };
        Subscriber2.prototype._next = function(value) {
            this.destination.next(value);
        };
        Subscriber2.prototype._error = function(err) {
            try {
                this.destination.error(err);
            } finally {
                this.unsubscribe();
            }
        };
        Subscriber2.prototype._complete = function() {
            try {
                this.destination.complete();
            } finally {
                this.unsubscribe();
            }
        };
        return Subscriber2;
    }(Subscription);
    var _bind = Function.prototype.bind;
    function bind(fn, thisArg) {
        return _bind.call(fn, thisArg);
    }
    var ConsumerObserver = function() {
        function ConsumerObserver2(partialObserver) {
            this.partialObserver = partialObserver;
        }
        ConsumerObserver2.prototype.next = function(value) {
            var partialObserver = this.partialObserver;
            if (partialObserver.next) {
                try {
                    partialObserver.next(value);
                } catch (error) {
                    handleUnhandledError(error);
                }
            }
        };
        ConsumerObserver2.prototype.error = function(err) {
            var partialObserver = this.partialObserver;
            if (partialObserver.error) {
                try {
                    partialObserver.error(err);
                } catch (error) {
                    handleUnhandledError(error);
                }
            } else {
                handleUnhandledError(err);
            }
        };
        ConsumerObserver2.prototype.complete = function() {
            var partialObserver = this.partialObserver;
            if (partialObserver.complete) {
                try {
                    partialObserver.complete();
                } catch (error) {
                    handleUnhandledError(error);
                }
            }
        };
        return ConsumerObserver2;
    }();
    var SafeSubscriber = function(_super) {
        __extends(SafeSubscriber2, _super);
        function SafeSubscriber2(observerOrNext, error, complete) {
            var _this = _super.call(this) || this;
            var partialObserver;
            if (isFunction(observerOrNext) || !observerOrNext) {
                partialObserver = {
                    next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
                    error: error !== null && error !== void 0 ? error : void 0,
                    complete: complete !== null && complete !== void 0 ? complete : void 0
                };
            } else {
                var context_1;
                if (_this && config.useDeprecatedNextContext) {
                    context_1 = Object.create(observerOrNext);
                    context_1.unsubscribe = function() {
                        return _this.unsubscribe();
                    };
                    partialObserver = {
                        next: observerOrNext.next && bind(observerOrNext.next, context_1),
                        error: observerOrNext.error && bind(observerOrNext.error, context_1),
                        complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
                    };
                } else {
                    partialObserver = observerOrNext;
                }
            }
            _this.destination = new ConsumerObserver(partialObserver);
            return _this;
        }
        return SafeSubscriber2;
    }(Subscriber);
    function handleUnhandledError(error) {
        {
            reportUnhandledError(error);
        }
    }
    function defaultErrorHandler(err) {
        throw err;
    }
    var EMPTY_OBSERVER = {
        closed: true,
        next: noop,
        error: defaultErrorHandler,
        complete: noop
    };
    var observable = function() {
        return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
    function identity(x) {
        return x;
    }
    function pipeFromArray(fns) {
        if (fns.length === 0) {
            return identity;
        }
        if (fns.length === 1) {
            return fns[0];
        }
        return function piped(input) {
            return fns.reduce(function(prev, fn) {
                return fn(prev);
            }, input);
        };
    }
    var Observable = function() {
        function Observable2(subscribe) {
            if (subscribe) {
                this._subscribe = subscribe;
            }
        }
        Observable2.prototype.lift = function(operator) {
            var observable2 = new Observable2();
            observable2.source = this;
            observable2.operator = operator;
            return observable2;
        };
        Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
            var _this = this;
            var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
            errorContext(function() {
                var _a = _this, operator = _a.operator, source = _a.source;
                subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
            });
            return subscriber;
        };
        Observable2.prototype._trySubscribe = function(sink) {
            try {
                return this._subscribe(sink);
            } catch (err) {
                sink.error(err);
            }
        };
        Observable2.prototype.forEach = function(next, promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function(resolve, reject) {
                var subscriber = new SafeSubscriber({
                    next: function(value) {
                        try {
                            next(value);
                        } catch (err) {
                            reject(err);
                            subscriber.unsubscribe();
                        }
                    },
                    error: reject,
                    complete: resolve
                });
                _this.subscribe(subscriber);
            });
        };
        Observable2.prototype._subscribe = function(subscriber) {
            var _a;
            return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
        };
        Observable2.prototype[observable] = function() {
            return this;
        };
        Observable2.prototype.pipe = function() {
            var operations = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                operations[_i] = arguments[_i];
            }
            return pipeFromArray(operations)(this);
        };
        Observable2.prototype.toPromise = function(promiseCtor) {
            var _this = this;
            promiseCtor = getPromiseCtor(promiseCtor);
            return new promiseCtor(function(resolve, reject) {
                var value;
                _this.subscribe(function(x) {
                    return value = x;
                }, function(err) {
                    return reject(err);
                }, function() {
                    return resolve(value);
                });
            });
        };
        Observable2.create = function(subscribe) {
            return new Observable2(subscribe);
        };
        return Observable2;
    }();
    function getPromiseCtor(promiseCtor) {
        var _a;
        return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
    }
    function isObserver(value) {
        return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
    }
    function isSubscriber(value) {
        return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
    }
    function isInteropObservable(input) {
        return isFunction(input[observable]);
    }
    function isAsyncIterable(obj) {
        return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
    }
    function createInvalidObservableTypeError(input) {
        return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    function getSymbolIterator() {
        if (typeof Symbol !== "function" || !Symbol.iterator) {
            return "@@iterator";
        }
        return Symbol.iterator;
    }
    var iterator = getSymbolIterator();
    function isIterable(input) {
        return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
    }
    function readableStreamLikeToAsyncGenerator(readableStream) {
        return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
            var reader, _a, value, done;
            return __generator(this, function(_b) {
                switch (_b.label) {
                    case 0:
                        reader = readableStream.getReader();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 9, 10]);
                        _b.label = 2;
                    case 2:
                        return [4, __await(reader.read())];
                    case 3:
                        _a = _b.sent(), value = _a.value, done = _a.done;
                        if (!done)
                            return [3, 5];
                        return [4, __await(void 0)];
                    case 4:
                        return [2, _b.sent()];
                    case 5:
                        return [4, __await(value)];
                    case 6:
                        return [4, _b.sent()];
                    case 7:
                        _b.sent();
                        return [3, 2];
                    case 8:
                        return [3, 10];
                    case 9:
                        reader.releaseLock();
                        return [7];
                    case 10:
                        return [2];
                }
            });
        });
    }
    function isReadableStreamLike(obj) {
        return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
    }
    function innerFrom(input) {
        if (input instanceof Observable) {
            return input;
        }
        if (input != null) {
            if (isInteropObservable(input)) {
                return fromInteropObservable(input);
            }
            if (isArrayLike(input)) {
                return fromArrayLike(input);
            }
            if (isPromise(input)) {
                return fromPromise(input);
            }
            if (isAsyncIterable(input)) {
                return fromAsyncIterable(input);
            }
            if (isIterable(input)) {
                return fromIterable(input);
            }
            if (isReadableStreamLike(input)) {
                return fromReadableStreamLike(input);
            }
        }
        throw createInvalidObservableTypeError(input);
    }
    function fromInteropObservable(obj) {
        return new Observable(function(subscriber) {
            var obs = obj[observable]();
            if (isFunction(obs.subscribe)) {
                return obs.subscribe(subscriber);
            }
            throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
    }
    function fromArrayLike(array) {
        return new Observable(function(subscriber) {
            for (var i = 0; i < array.length && !subscriber.closed; i++) {
                subscriber.next(array[i]);
            }
            subscriber.complete();
        });
    }
    function fromPromise(promise) {
        return new Observable(function(subscriber) {
            promise.then(function(value) {
                if (!subscriber.closed) {
                    subscriber.next(value);
                    subscriber.complete();
                }
            }, function(err) {
                return subscriber.error(err);
            }).then(null, reportUnhandledError);
        });
    }
    function fromIterable(iterable) {
        return new Observable(function(subscriber) {
            var e_1, _a;
            try {
                for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                    var value = iterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return;
                    }
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
                        _a.call(iterable_1);
                } finally {
                    if (e_1)
                        throw e_1.error;
                }
            }
            subscriber.complete();
        });
    }
    function fromAsyncIterable(asyncIterable) {
        return new Observable(function(subscriber) {
            process(asyncIterable, subscriber).catch(function(err) {
                return subscriber.error(err);
            });
        });
    }
    function fromReadableStreamLike(readableStream) {
        return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
    }
    function process(asyncIterable, subscriber) {
        var asyncIterable_1, asyncIterable_1_1;
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function() {
            var value, e_2_1;
            return __generator(this, function(_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, 6, 11]);
                        asyncIterable_1 = __asyncValues(asyncIterable);
                        _b.label = 1;
                    case 1:
                        return [4, asyncIterable_1.next()];
                    case 2:
                        if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
                            return [3, 4];
                        value = asyncIterable_1_1.value;
                        subscriber.next(value);
                        if (subscriber.closed) {
                            return [2];
                        }
                        _b.label = 3;
                    case 3:
                        return [3, 1];
                    case 4:
                        return [3, 11];
                    case 5:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3, 11];
                    case 6:
                        _b.trys.push([6, , 9, 10]);
                        if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
                            return [3, 8];
                        return [4, _a.call(asyncIterable_1)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        if (e_2)
                            throw e_2.error;
                        return [7];
                    case 10:
                        return [7];
                    case 11:
                        subscriber.complete();
                        return [2];
                }
            });
        });
    }
    function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
    }
    var OperatorSubscriber = function(_super) {
        __extends(OperatorSubscriber2, _super);
        function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
            var _this = _super.call(this, destination) || this;
            _this.onFinalize = onFinalize;
            _this.shouldUnsubscribe = shouldUnsubscribe;
            _this._next = onNext ? function(value) {
                try {
                    onNext(value);
                } catch (err) {
                    destination.error(err);
                }
            } : _super.prototype._next;
            _this._error = onError ? function(err) {
                try {
                    onError(err);
                } catch (err2) {
                    destination.error(err2);
                } finally {
                    this.unsubscribe();
                }
            } : _super.prototype._error;
            _this._complete = onComplete ? function() {
                try {
                    onComplete();
                } catch (err) {
                    destination.error(err);
                } finally {
                    this.unsubscribe();
                }
            } : _super.prototype._complete;
            return _this;
        }
        OperatorSubscriber2.prototype.unsubscribe = function() {
            var _a;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var closed_1 = this.closed;
                _super.prototype.unsubscribe.call(this);
                !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
            }
        };
        return OperatorSubscriber2;
    }(Subscriber);
    function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
        if (delay === void 0) {
            delay = 0;
        }
        if (repeat === void 0) {
            repeat = false;
        }
        var scheduleSubscription = scheduler.schedule(function() {
            work();
            if (repeat) {
                parentSubscription.add(this.schedule(null, delay));
            } else {
                this.unsubscribe();
            }
        }, delay);
        parentSubscription.add(scheduleSubscription);
        if (!repeat) {
            return scheduleSubscription;
        }
    }
    function map(project, thisArg) {
        return operate(function(source, subscriber) {
            var index = 0;
            source.subscribe(createOperatorSubscriber(subscriber, function(value) {
                subscriber.next(project.call(thisArg, value, index++));
            }));
        });
    }
    function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
        var buffer = [];
        var active = 0;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
            if (isComplete && !buffer.length && !active) {
                subscriber.complete();
            }
        };
        var outerNext = function(value) {
            return active < concurrent ? doInnerSub(value) : buffer.push(value);
        };
        var doInnerSub = function(value) {
            expand && subscriber.next(value);
            active++;
            var innerComplete = false;
            innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
                onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
                if (expand) {
                    outerNext(innerValue);
                } else {
                    subscriber.next(innerValue);
                }
            }, function() {
                innerComplete = true;
            }, void 0, function() {
                if (innerComplete) {
                    try {
                        active--;
                        var _loop_1 = function() {
                            var bufferedValue = buffer.shift();
                            if (innerSubScheduler) {
                                executeSchedule(subscriber, innerSubScheduler, function() {
                                    return doInnerSub(bufferedValue);
                                });
                            } else {
                                doInnerSub(bufferedValue);
                            }
                        };
                        while (buffer.length && active < concurrent) {
                            _loop_1();
                        }
                        checkComplete();
                    } catch (err) {
                        subscriber.error(err);
                    }
                }
            }));
        };
        source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
            isComplete = true;
            checkComplete();
        }));
        return function() {
            additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
        };
    }
    function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Infinity;
        }
        if (isFunction(resultSelector)) {
            return mergeMap(function(a, i) {
                return map(function(b, ii) {
                    return resultSelector(a, b, i, ii);
                })(innerFrom(project(a, i)));
            }, concurrent);
        } else if (typeof resultSelector === "number") {
            concurrent = resultSelector;
        }
        return operate(function(source, subscriber) {
            return mergeInternals(source, subscriber, project, concurrent);
        });
    }
    function mergeAll(concurrent) {
        if (concurrent === void 0) {
            concurrent = Infinity;
        }
        return mergeMap(identity, concurrent);
    }
    function concatAll() {
        return mergeAll(1);
    }
    function concatMap(project, resultSelector) {
        return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
    }
    class IframeUtils {
        static getIframes(element) {
            return Array.from(element.querySelectorAll("iframe"));
        }
        static getAllNestedIframes(element) {
            const iframes = IframeUtils.getIframes(element);
            if (iframes.length === 0) {
                return rxjs.of([]);
            } else {
                return rxjs.from(iframes).pipe(
                    mergeMap(
                        (iframe) => new rxjs.Observable((subscriber) => {
                            if (iframe.contentDocument) {
                                const iframeDocument = iframe.contentDocument;
                                const nestedIframes = IframeUtils.getAllNestedIframes(iframeDocument.documentElement);
                                nestedIframes.subscribe((nestedIframes2) => {
                                    subscriber.next([iframe, ...nestedIframes2]);
                                    subscriber.complete();
                                });
                            } else {
                                subscriber.next([]);
                                subscriber.complete();
                            }
                        })
                    ),
                    concatAll(),
                    rxjs.toArray()
                );
            }
        }
    }
    var Typr$1 = {};
    var Typr = {};
    Typr.parse = function(buff) {
        var bin = Typr._bin;
        var data = new Uint8Array(buff);
        var tag = bin.readASCII(data, 0, 4);
        if (tag == "ttcf") {
            var offset = 4;
            bin.readUshort(data, offset);
            offset += 2;
            bin.readUshort(data, offset);
            offset += 2;
            var numF = bin.readUint(data, offset);
            offset += 4;
            var fnts = [];
            for (var i = 0; i < numF; i++) {
                var foff = bin.readUint(data, offset);
                offset += 4;
                fnts.push(Typr._readFont(data, foff));
            }
            return fnts;
        } else
            return [Typr._readFont(data, 0)];
    };
    Typr._readFont = function(data, offset) {
        var bin = Typr._bin;
        var ooff = offset;
        bin.readFixed(data, offset);
        offset += 4;
        var numTables = bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        var tags = [
            "cmap",
            "head",
            "hhea",
            "maxp",
            "hmtx",
            "name",
            "OS/2",
            "post",
            //"cvt",
            //"fpgm",
            "loca",
            "glyf",
            "kern",
            //"prep"
            //"gasp"
            "CFF ",
            "GPOS",
            "GSUB",
            "SVG "
            //"VORG",
        ];
        var obj = { _data: data, _offset: ooff };
        var tabs = {};
        for (var i = 0; i < numTables; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            bin.readUint(data, offset);
            offset += 4;
            var toffset = bin.readUint(data, offset);
            offset += 4;
            var length = bin.readUint(data, offset);
            offset += 4;
            tabs[tag] = { offset: toffset, length };
        }
        for (var i = 0; i < tags.length; i++) {
            var t = tags[i];
            if (tabs[t])
                obj[t.trim()] = Typr[t.trim()].parse(data, tabs[t].offset, tabs[t].length, obj);
        }
        return obj;
    };
    Typr._tabOffset = function(data, tab, foff) {
        var bin = Typr._bin;
        var numTables = bin.readUshort(data, foff + 4);
        var offset = foff + 12;
        for (var i = 0; i < numTables; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            bin.readUint(data, offset);
            offset += 4;
            var toffset = bin.readUint(data, offset);
            offset += 4;
            bin.readUint(data, offset);
            offset += 4;
            if (tag == tab)
                return toffset;
        }
        return 0;
    };
    Typr._bin = {
        readFixed: function(data, o) {
            return (data[o] << 8 | data[o + 1]) + (data[o + 2] << 8 | data[o + 3]) / (256 * 256 + 4);
        },
        readF2dot14: function(data, o) {
            var num = Typr._bin.readShort(data, o);
            return num / 16384;
        },
        readInt: function(buff, p) {
            return Typr._bin._view(buff).getInt32(p);
        },
        readInt8: function(buff, p) {
            return Typr._bin._view(buff).getInt8(p);
        },
        readShort: function(buff, p) {
            return Typr._bin._view(buff).getInt16(p);
        },
        readUshort: function(buff, p) {
            return Typr._bin._view(buff).getUint16(p);
        },
        readUshorts: function(buff, p, len) {
            var arr = [];
            for (var i = 0; i < len; i++)
                arr.push(Typr._bin.readUshort(buff, p + i * 2));
            return arr;
        },
        readUint: function(buff, p) {
            return Typr._bin._view(buff).getUint32(p);
        },
        readUint64: function(buff, p) {
            return Typr._bin.readUint(buff, p) * (4294967295 + 1) + Typr._bin.readUint(buff, p + 4);
        },
        readASCII: function(buff, p, l) {
            var s = "";
            for (var i = 0; i < l; i++)
                s += String.fromCharCode(buff[p + i]);
            return s;
        },
        readUnicode: function(buff, p, l) {
            var s = "";
            for (var i = 0; i < l; i++) {
                var c = buff[p++] << 8 | buff[p++];
                s += String.fromCharCode(c);
            }
            return s;
        },
        _tdec: typeof window !== "undefined" && window["TextDecoder"] ? new window["TextDecoder"]() : null,
        readUTF8: function(buff, p, l) {
            var tdec = Typr._bin._tdec;
            if (tdec && p == 0 && l == buff.length)
                return tdec["decode"](buff);
            return Typr._bin.readASCII(buff, p, l);
        },
        readBytes: function(buff, p, l) {
            var arr = [];
            for (var i = 0; i < l; i++)
                arr.push(buff[p + i]);
            return arr;
        },
        readASCIIArray: function(buff, p, l) {
            var s = [];
            for (var i = 0; i < l; i++)
                s.push(String.fromCharCode(buff[p + i]));
            return s;
        },
        _view: function(buff) {
            return buff._dataView || (buff._dataView = buff.buffer ? new DataView(buff.buffer, buff.byteOffset, buff.byteLength) : new DataView(new Uint8Array(buff).buffer));
        }
    };
    Typr._lctf = {};
    Typr._lctf.parse = function(data, offset, length, font, subt) {
        var bin = Typr._bin;
        var obj = {};
        var offset0 = offset;
        bin.readFixed(data, offset);
        offset += 4;
        var offScriptList = bin.readUshort(data, offset);
        offset += 2;
        var offFeatureList = bin.readUshort(data, offset);
        offset += 2;
        var offLookupList = bin.readUshort(data, offset);
        offset += 2;
        obj.scriptList = Typr._lctf.readScriptList(data, offset0 + offScriptList);
        obj.featureList = Typr._lctf.readFeatureList(data, offset0 + offFeatureList);
        obj.lookupList = Typr._lctf.readLookupList(data, offset0 + offLookupList, subt);
        return obj;
    };
    Typr._lctf.readLookupList = function(data, offset, subt) {
        var bin = Typr._bin;
        var offset0 = offset;
        var obj = [];
        var count = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < count; i++) {
            var noff = bin.readUshort(data, offset);
            offset += 2;
            var lut = Typr._lctf.readLookupTable(data, offset0 + noff, subt);
            obj.push(lut);
        }
        return obj;
    };
    Typr._lctf.readLookupTable = function(data, offset, subt) {
        var bin = Typr._bin;
        var offset0 = offset;
        var obj = { tabs: [] };
        obj.ltype = bin.readUshort(data, offset);
        offset += 2;
        obj.flag = bin.readUshort(data, offset);
        offset += 2;
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        var ltype = obj.ltype;
        for (var i = 0; i < cnt; i++) {
            var noff = bin.readUshort(data, offset);
            offset += 2;
            var tab = subt(data, ltype, offset0 + noff, obj);
            obj.tabs.push(tab);
        }
        return obj;
    };
    Typr._lctf.numOfOnes = function(n) {
        var num = 0;
        for (var i = 0; i < 32; i++)
            if ((n >>> i & 1) != 0)
                num++;
        return num;
    };
    Typr._lctf.readClassDef = function(data, offset) {
        var bin = Typr._bin;
        var obj = [];
        var format = bin.readUshort(data, offset);
        offset += 2;
        if (format == 1) {
            var startGlyph = bin.readUshort(data, offset);
            offset += 2;
            var glyphCount = bin.readUshort(data, offset);
            offset += 2;
            for (var i = 0; i < glyphCount; i++) {
                obj.push(startGlyph + i);
                obj.push(startGlyph + i);
                obj.push(bin.readUshort(data, offset));
                offset += 2;
            }
        }
        if (format == 2) {
            var count = bin.readUshort(data, offset);
            offset += 2;
            for (var i = 0; i < count; i++) {
                obj.push(bin.readUshort(data, offset));
                offset += 2;
                obj.push(bin.readUshort(data, offset));
                offset += 2;
                obj.push(bin.readUshort(data, offset));
                offset += 2;
            }
        }
        return obj;
    };
    Typr._lctf.getInterval = function(tab, val) {
        for (var i = 0; i < tab.length; i += 3) {
            var start = tab[i], end = tab[i + 1];
            tab[i + 2];
            if (start <= val && val <= end)
                return i;
        }
        return -1;
    };
    Typr._lctf.readCoverage = function(data, offset) {
        var bin = Typr._bin;
        var cvg = {};
        cvg.fmt = bin.readUshort(data, offset);
        offset += 2;
        var count = bin.readUshort(data, offset);
        offset += 2;
        if (cvg.fmt == 1)
            cvg.tab = bin.readUshorts(data, offset, count);
        if (cvg.fmt == 2)
            cvg.tab = bin.readUshorts(data, offset, count * 3);
        return cvg;
    };
    Typr._lctf.coverageIndex = function(cvg, val) {
        var tab = cvg.tab;
        if (cvg.fmt == 1)
            return tab.indexOf(val);
        if (cvg.fmt == 2) {
            var ind = Typr._lctf.getInterval(tab, val);
            if (ind != -1)
                return tab[ind + 2] + (val - tab[ind]);
        }
        return -1;
    };
    Typr._lctf.readFeatureList = function(data, offset) {
        var bin = Typr._bin;
        var offset0 = offset;
        var obj = [];
        var count = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < count; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            var noff = bin.readUshort(data, offset);
            offset += 2;
            var feat = Typr._lctf.readFeatureTable(data, offset0 + noff);
            feat.tag = tag.trim();
            obj.push(feat);
        }
        return obj;
    };
    Typr._lctf.readFeatureTable = function(data, offset) {
        var bin = Typr._bin;
        var offset0 = offset;
        var feat = {};
        var featureParams = bin.readUshort(data, offset);
        offset += 2;
        if (featureParams > 0) {
            feat.featureParams = offset0 + featureParams;
        }
        var lookupCount = bin.readUshort(data, offset);
        offset += 2;
        feat.tab = [];
        for (var i = 0; i < lookupCount; i++)
            feat.tab.push(bin.readUshort(data, offset + 2 * i));
        return feat;
    };
    Typr._lctf.readScriptList = function(data, offset) {
        var bin = Typr._bin;
        var offset0 = offset;
        var obj = {};
        var count = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < count; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            var noff = bin.readUshort(data, offset);
            offset += 2;
            obj[tag.trim()] = Typr._lctf.readScriptTable(data, offset0 + noff);
        }
        return obj;
    };
    Typr._lctf.readScriptTable = function(data, offset) {
        var bin = Typr._bin;
        var offset0 = offset;
        var obj = {};
        var defLangSysOff = bin.readUshort(data, offset);
        offset += 2;
        obj["default"] = Typr._lctf.readLangSysTable(data, offset0 + defLangSysOff);
        var langSysCount = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < langSysCount; i++) {
            var tag = bin.readASCII(data, offset, 4);
            offset += 4;
            var langSysOff = bin.readUshort(data, offset);
            offset += 2;
            obj[tag.trim()] = Typr._lctf.readLangSysTable(data, offset0 + langSysOff);
        }
        return obj;
    };
    Typr._lctf.readLangSysTable = function(data, offset) {
        var bin = Typr._bin;
        var obj = {};
        bin.readUshort(data, offset);
        offset += 2;
        obj.reqFeature = bin.readUshort(data, offset);
        offset += 2;
        var featureCount = bin.readUshort(data, offset);
        offset += 2;
        obj.features = bin.readUshorts(data, offset, featureCount);
        return obj;
    };
    Typr.CFF = {};
    Typr.CFF.parse = function(data, offset, length) {
        var bin = Typr._bin;
        data = new Uint8Array(data.buffer, offset, length);
        offset = 0;
        data[offset];
        offset++;
        data[offset];
        offset++;
        data[offset];
        offset++;
        data[offset];
        offset++;
        var ninds = [];
        offset = Typr.CFF.readIndex(data, offset, ninds);
        var names = [];
        for (var i = 0; i < ninds.length - 1; i++)
            names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
        offset += ninds[ninds.length - 1];
        var tdinds = [];
        offset = Typr.CFF.readIndex(data, offset, tdinds);
        var topDicts = [];
        for (var i = 0; i < tdinds.length - 1; i++)
            topDicts.push(Typr.CFF.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
        offset += tdinds[tdinds.length - 1];
        var topdict = topDicts[0];
        var sinds = [];
        offset = Typr.CFF.readIndex(data, offset, sinds);
        var strings = [];
        for (var i = 0; i < sinds.length - 1; i++)
            strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
        offset += sinds[sinds.length - 1];
        Typr.CFF.readSubrs(data, offset, topdict);
        if (topdict.CharStrings) {
            offset = topdict.CharStrings;
            var sinds = [];
            offset = Typr.CFF.readIndex(data, offset, sinds);
            var cstr = [];
            for (var i = 0; i < sinds.length - 1; i++)
                cstr.push(bin.readBytes(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
            topdict.CharStrings = cstr;
        }
        if (topdict.ROS) {
            offset = topdict.FDArray;
            var fdind = [];
            offset = Typr.CFF.readIndex(data, offset, fdind);
            topdict.FDArray = [];
            for (var i = 0; i < fdind.length - 1; i++) {
                var dict = Typr.CFF.readDict(data, offset + fdind[i], offset + fdind[i + 1]);
                Typr.CFF._readFDict(data, dict, strings);
                topdict.FDArray.push(dict);
            }
            offset += fdind[fdind.length - 1];
            offset = topdict.FDSelect;
            topdict.FDSelect = [];
            var fmt = data[offset];
            offset++;
            if (fmt == 3) {
                var rns = bin.readUshort(data, offset);
                offset += 2;
                for (var i = 0; i < rns + 1; i++) {
                    topdict.FDSelect.push(bin.readUshort(data, offset), data[offset + 2]);
                    offset += 3;
                }
            } else
                throw fmt;
        }
        if (topdict.Encoding)
            topdict.Encoding = Typr.CFF.readEncoding(data, topdict.Encoding, topdict.CharStrings.length);
        if (topdict.charset)
            topdict.charset = Typr.CFF.readCharset(data, topdict.charset, topdict.CharStrings.length);
        Typr.CFF._readFDict(data, topdict, strings);
        return topdict;
    };
    Typr.CFF._readFDict = function(data, dict, ss) {
        var offset;
        if (dict.Private) {
            offset = dict.Private[1];
            dict.Private = Typr.CFF.readDict(data, offset, offset + dict.Private[0]);
            if (dict.Private.Subrs)
                Typr.CFF.readSubrs(data, offset + dict.Private.Subrs, dict.Private);
        }
        for (var p in dict)
            if (["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(p) != -1)
                dict[p] = ss[dict[p] - 426 + 35];
    };
    Typr.CFF.readSubrs = function(data, offset, obj) {
        var bin = Typr._bin;
        var gsubinds = [];
        offset = Typr.CFF.readIndex(data, offset, gsubinds);
        var bias, nSubrs = gsubinds.length;
        if (nSubrs < 1240)
            bias = 107;
        else if (nSubrs < 33900)
            bias = 1131;
        else
            bias = 32768;
        obj.Bias = bias;
        obj.Subrs = [];
        for (var i = 0; i < gsubinds.length - 1; i++)
            obj.Subrs.push(bin.readBytes(data, offset + gsubinds[i], gsubinds[i + 1] - gsubinds[i]));
    };
    Typr.CFF.tableSE = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        91,
        92,
        93,
        94,
        95,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        96,
        97,
        98,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        107,
        108,
        109,
        110,
        0,
        111,
        112,
        113,
        114,
        0,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        0,
        123,
        0,
        124,
        125,
        126,
        127,
        128,
        129,
        130,
        131,
        0,
        132,
        133,
        0,
        134,
        135,
        136,
        137,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        138,
        0,
        139,
        0,
        0,
        0,
        0,
        140,
        141,
        142,
        143,
        0,
        0,
        0,
        0,
        0,
        144,
        0,
        0,
        0,
        145,
        0,
        0,
        146,
        147,
        148,
        149,
        0,
        0,
        0,
        0
    ];
    Typr.CFF.glyphByUnicode = function(cff, code) {
        for (var i = 0; i < cff.charset.length; i++)
            if (cff.charset[i] == code)
                return i;
        return -1;
    };
    Typr.CFF.glyphBySE = function(cff, charcode) {
        if (charcode < 0 || charcode > 255)
            return -1;
        return Typr.CFF.glyphByUnicode(cff, Typr.CFF.tableSE[charcode]);
    };
    Typr.CFF.readEncoding = function(data, offset, num) {
        Typr._bin;
        var array = [".notdef"];
        var format = data[offset];
        offset++;
        if (format == 0) {
            var nCodes = data[offset];
            offset++;
            for (var i = 0; i < nCodes; i++)
                array.push(data[offset + i]);
        } else
            throw "error: unknown encoding format: " + format;
        return array;
    };
    Typr.CFF.readCharset = function(data, offset, num) {
        var bin = Typr._bin;
        var charset = [".notdef"];
        var format = data[offset];
        offset++;
        if (format == 0) {
            for (var i = 0; i < num; i++) {
                var first = bin.readUshort(data, offset);
                offset += 2;
                charset.push(first);
            }
        } else if (format == 1 || format == 2) {
            while (charset.length < num) {
                var first = bin.readUshort(data, offset);
                offset += 2;
                var nLeft = 0;
                if (format == 1) {
                    nLeft = data[offset];
                    offset++;
                } else {
                    nLeft = bin.readUshort(data, offset);
                    offset += 2;
                }
                for (var i = 0; i <= nLeft; i++) {
                    charset.push(first);
                    first++;
                }
            }
        } else
            throw "error: format: " + format;
        return charset;
    };
    Typr.CFF.readIndex = function(data, offset, inds) {
        var bin = Typr._bin;
        var count = bin.readUshort(data, offset) + 1;
        offset += 2;
        var offsize = data[offset];
        offset++;
        if (offsize == 1)
            for (var i = 0; i < count; i++)
                inds.push(data[offset + i]);
        else if (offsize == 2)
            for (var i = 0; i < count; i++)
                inds.push(bin.readUshort(data, offset + i * 2));
        else if (offsize == 3)
            for (var i = 0; i < count; i++)
                inds.push(bin.readUint(data, offset + i * 3 - 1) & 16777215);
        else if (count != 1)
            throw "unsupported offset size: " + offsize + ", count: " + count;
        offset += count * offsize;
        return offset - 1;
    };
    Typr.CFF.getCharString = function(data, offset, o) {
        var bin = Typr._bin;
        var b0 = data[offset], b1 = data[offset + 1];
        data[offset + 2];
        data[offset + 3];
        data[offset + 4];
        var vs = 1;
        var op = null, val = null;
        if (b0 <= 20) {
            op = b0;
            vs = 1;
        }
        if (b0 == 12) {
            op = b0 * 100 + b1;
            vs = 2;
        }
        if (21 <= b0 && b0 <= 27) {
            op = b0;
            vs = 1;
        }
        if (b0 == 28) {
            val = bin.readShort(data, offset + 1);
            vs = 3;
        }
        if (29 <= b0 && b0 <= 31) {
            op = b0;
            vs = 1;
        }
        if (32 <= b0 && b0 <= 246) {
            val = b0 - 139;
            vs = 1;
        }
        if (247 <= b0 && b0 <= 250) {
            val = (b0 - 247) * 256 + b1 + 108;
            vs = 2;
        }
        if (251 <= b0 && b0 <= 254) {
            val = -(b0 - 251) * 256 - b1 - 108;
            vs = 2;
        }
        if (b0 == 255) {
            val = bin.readInt(data, offset + 1) / 65535;
            vs = 5;
        }
        o.val = val != null ? val : "o" + op;
        o.size = vs;
    };
    Typr.CFF.readCharString = function(data, offset, length) {
        var end = offset + length;
        var bin = Typr._bin;
        var arr = [];
        while (offset < end) {
            var b0 = data[offset], b1 = data[offset + 1];
            data[offset + 2];
            data[offset + 3];
            data[offset + 4];
            var vs = 1;
            var op = null, val = null;
            if (b0 <= 20) {
                op = b0;
                vs = 1;
            }
            if (b0 == 12) {
                op = b0 * 100 + b1;
                vs = 2;
            }
            if (b0 == 19 || b0 == 20) {
                op = b0;
                vs = 2;
            }
            if (21 <= b0 && b0 <= 27) {
                op = b0;
                vs = 1;
            }
            if (b0 == 28) {
                val = bin.readShort(data, offset + 1);
                vs = 3;
            }
            if (29 <= b0 && b0 <= 31) {
                op = b0;
                vs = 1;
            }
            if (32 <= b0 && b0 <= 246) {
                val = b0 - 139;
                vs = 1;
            }
            if (247 <= b0 && b0 <= 250) {
                val = (b0 - 247) * 256 + b1 + 108;
                vs = 2;
            }
            if (251 <= b0 && b0 <= 254) {
                val = -(b0 - 251) * 256 - b1 - 108;
                vs = 2;
            }
            if (b0 == 255) {
                val = bin.readInt(data, offset + 1) / 65535;
                vs = 5;
            }
            arr.push(val != null ? val : "o" + op);
            offset += vs;
        }
        return arr;
    };
    Typr.CFF.readDict = function(data, offset, end) {
        var bin = Typr._bin;
        var dict = {};
        var carr = [];
        while (offset < end) {
            var b0 = data[offset], b1 = data[offset + 1];
            data[offset + 2];
            data[offset + 3];
            data[offset + 4];
            var vs = 1;
            var key = null, val = null;
            if (b0 == 28) {
                val = bin.readShort(data, offset + 1);
                vs = 3;
            }
            if (b0 == 29) {
                val = bin.readInt(data, offset + 1);
                vs = 5;
            }
            if (32 <= b0 && b0 <= 246) {
                val = b0 - 139;
                vs = 1;
            }
            if (247 <= b0 && b0 <= 250) {
                val = (b0 - 247) * 256 + b1 + 108;
                vs = 2;
            }
            if (251 <= b0 && b0 <= 254) {
                val = -(b0 - 251) * 256 - b1 - 108;
                vs = 2;
            }
            if (b0 == 255) {
                val = bin.readInt(data, offset + 1) / 65535;
                vs = 5;
                throw "unknown number";
            }
            if (b0 == 30) {
                var nibs = [];
                vs = 1;
                while (true) {
                    var b = data[offset + vs];
                    vs++;
                    var nib0 = b >> 4, nib1 = b & 15;
                    if (nib0 != 15)
                        nibs.push(nib0);
                    if (nib1 != 15)
                        nibs.push(nib1);
                    if (nib1 == 15)
                        break;
                }
                var s = "";
                var chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"];
                for (var i = 0; i < nibs.length; i++)
                    s += chars[nibs[i]];
                val = parseFloat(s);
            }
            if (b0 <= 21) {
                var keys = [
                    "version",
                    "Notice",
                    "FullName",
                    "FamilyName",
                    "Weight",
                    "FontBBox",
                    "BlueValues",
                    "OtherBlues",
                    "FamilyBlues",
                    "FamilyOtherBlues",
                    "StdHW",
                    "StdVW",
                    "escape",
                    "UniqueID",
                    "XUID",
                    "charset",
                    "Encoding",
                    "CharStrings",
                    "Private",
                    "Subrs",
                    "defaultWidthX",
                    "nominalWidthX"
                ];
                key = keys[b0];
                vs = 1;
                if (b0 == 12) {
                    var keys = [
                        "Copyright",
                        "isFixedPitch",
                        "ItalicAngle",
                        "UnderlinePosition",
                        "UnderlineThickness",
                        "PaintType",
                        "CharstringType",
                        "FontMatrix",
                        "StrokeWidth",
                        "BlueScale",
                        "BlueShift",
                        "BlueFuzz",
                        "StemSnapH",
                        "StemSnapV",
                        "ForceBold",
                        0,
                        0,
                        "LanguageGroup",
                        "ExpansionFactor",
                        "initialRandomSeed",
                        "SyntheticBase",
                        "PostScript",
                        "BaseFontName",
                        "BaseFontBlend",
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        "ROS",
                        "CIDFontVersion",
                        "CIDFontRevision",
                        "CIDFontType",
                        "CIDCount",
                        "UIDBase",
                        "FDArray",
                        "FDSelect",
                        "FontName"
                    ];
                    key = keys[b1];
                    vs = 2;
                }
            }
            if (key != null) {
                dict[key] = carr.length == 1 ? carr[0] : carr;
                carr = [];
            } else
                carr.push(val);
            offset += vs;
        }
        return dict;
    };
    Typr.cmap = {};
    Typr.cmap.parse = function(data, offset, length) {
        data = new Uint8Array(data.buffer, offset, length);
        offset = 0;
        var bin = Typr._bin;
        var obj = {};
        bin.readUshort(data, offset);
        offset += 2;
        var numTables = bin.readUshort(data, offset);
        offset += 2;
        var offs = [];
        obj.tables = [];
        for (var i = 0; i < numTables; i++) {
            var platformID = bin.readUshort(data, offset);
            offset += 2;
            var encodingID = bin.readUshort(data, offset);
            offset += 2;
            var noffset = bin.readUint(data, offset);
            offset += 4;
            var id = "p" + platformID + "e" + encodingID;
            var tind = offs.indexOf(noffset);
            if (tind == -1) {
                tind = obj.tables.length;
                var subt;
                offs.push(noffset);
                var format = bin.readUshort(data, noffset);
                if (format == 0)
                    subt = Typr.cmap.parse0(data, noffset);
                else if (format == 4)
                    subt = Typr.cmap.parse4(data, noffset);
                else if (format == 6)
                    subt = Typr.cmap.parse6(data, noffset);
                else if (format == 12)
                    subt = Typr.cmap.parse12(data, noffset);
                else
                    console.warn("unknown format: " + format, platformID, encodingID, noffset);
                obj.tables.push(subt);
            }
            if (obj[id] != null)
                throw "multiple tables for one platform+encoding";
            obj[id] = tind;
        }
        return obj;
    };
    Typr.cmap.parse0 = function(data, offset) {
        var bin = Typr._bin;
        var obj = {};
        obj.format = bin.readUshort(data, offset);
        offset += 2;
        var len = bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        obj.map = [];
        for (var i = 0; i < len - 6; i++)
            obj.map.push(data[offset + i]);
        return obj;
    };
    Typr.cmap.parse4 = function(data, offset) {
        var bin = Typr._bin;
        var offset0 = offset;
        var obj = {};
        obj.format = bin.readUshort(data, offset);
        offset += 2;
        var length = bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        var segCountX2 = bin.readUshort(data, offset);
        offset += 2;
        var segCount = segCountX2 / 2;
        obj.searchRange = bin.readUshort(data, offset);
        offset += 2;
        obj.entrySelector = bin.readUshort(data, offset);
        offset += 2;
        obj.rangeShift = bin.readUshort(data, offset);
        offset += 2;
        obj.endCount = bin.readUshorts(data, offset, segCount);
        offset += segCount * 2;
        offset += 2;
        obj.startCount = bin.readUshorts(data, offset, segCount);
        offset += segCount * 2;
        obj.idDelta = [];
        for (var i = 0; i < segCount; i++) {
            obj.idDelta.push(bin.readShort(data, offset));
            offset += 2;
        }
        obj.idRangeOffset = bin.readUshorts(data, offset, segCount);
        offset += segCount * 2;
        obj.glyphIdArray = [];
        while (offset < offset0 + length) {
            obj.glyphIdArray.push(bin.readUshort(data, offset));
            offset += 2;
        }
        return obj;
    };
    Typr.cmap.parse6 = function(data, offset) {
        var bin = Typr._bin;
        var obj = {};
        obj.format = bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        obj.firstCode = bin.readUshort(data, offset);
        offset += 2;
        var entryCount = bin.readUshort(data, offset);
        offset += 2;
        obj.glyphIdArray = [];
        for (var i = 0; i < entryCount; i++) {
            obj.glyphIdArray.push(bin.readUshort(data, offset));
            offset += 2;
        }
        return obj;
    };
    Typr.cmap.parse12 = function(data, offset) {
        var bin = Typr._bin;
        var obj = {};
        obj.format = bin.readUshort(data, offset);
        offset += 2;
        offset += 2;
        bin.readUint(data, offset);
        offset += 4;
        bin.readUint(data, offset);
        offset += 4;
        var nGroups = bin.readUint(data, offset);
        offset += 4;
        obj.groups = [];
        for (var i = 0; i < nGroups; i++) {
            var off = offset + i * 12;
            var startCharCode = bin.readUint(data, off + 0);
            var endCharCode = bin.readUint(data, off + 4);
            var startGlyphID = bin.readUint(data, off + 8);
            obj.groups.push([startCharCode, endCharCode, startGlyphID]);
        }
        return obj;
    };
    Typr.glyf = {};
    Typr.glyf.parse = function(data, offset, length, font) {
        var obj = [];
        for (var g = 0; g < font.maxp.numGlyphs; g++)
            obj.push(null);
        return obj;
    };
    Typr.glyf._parseGlyf = function(font, g) {
        var bin = Typr._bin;
        var data = font._data;
        var offset = Typr._tabOffset(data, "glyf", font._offset) + font.loca[g];
        if (font.loca[g] == font.loca[g + 1])
            return null;
        var gl = {};
        gl.noc = bin.readShort(data, offset);
        offset += 2;
        gl.xMin = bin.readShort(data, offset);
        offset += 2;
        gl.yMin = bin.readShort(data, offset);
        offset += 2;
        gl.xMax = bin.readShort(data, offset);
        offset += 2;
        gl.yMax = bin.readShort(data, offset);
        offset += 2;
        if (gl.xMin >= gl.xMax || gl.yMin >= gl.yMax)
            return null;
        if (gl.noc > 0) {
            gl.endPts = [];
            for (var i = 0; i < gl.noc; i++) {
                gl.endPts.push(bin.readUshort(data, offset));
                offset += 2;
            }
            var instructionLength = bin.readUshort(data, offset);
            offset += 2;
            if (data.length - offset < instructionLength)
                return null;
            gl.instructions = bin.readBytes(data, offset, instructionLength);
            offset += instructionLength;
            var crdnum = gl.endPts[gl.noc - 1] + 1;
            gl.flags = [];
            for (var i = 0; i < crdnum; i++) {
                var flag = data[offset];
                offset++;
                gl.flags.push(flag);
                if ((flag & 8) != 0) {
                    var rep = data[offset];
                    offset++;
                    for (var j = 0; j < rep; j++) {
                        gl.flags.push(flag);
                        i++;
                    }
                }
            }
            gl.xs = [];
            for (var i = 0; i < crdnum; i++) {
                var i8 = (gl.flags[i] & 2) != 0, same = (gl.flags[i] & 16) != 0;
                if (i8) {
                    gl.xs.push(same ? data[offset] : -data[offset]);
                    offset++;
                } else {
                    if (same)
                        gl.xs.push(0);
                    else {
                        gl.xs.push(bin.readShort(data, offset));
                        offset += 2;
                    }
                }
            }
            gl.ys = [];
            for (var i = 0; i < crdnum; i++) {
                var i8 = (gl.flags[i] & 4) != 0, same = (gl.flags[i] & 32) != 0;
                if (i8) {
                    gl.ys.push(same ? data[offset] : -data[offset]);
                    offset++;
                } else {
                    if (same)
                        gl.ys.push(0);
                    else {
                        gl.ys.push(bin.readShort(data, offset));
                        offset += 2;
                    }
                }
            }
            var x = 0, y = 0;
            for (var i = 0; i < crdnum; i++) {
                x += gl.xs[i];
                y += gl.ys[i];
                gl.xs[i] = x;
                gl.ys[i] = y;
            }
        } else {
            var ARG_1_AND_2_ARE_WORDS = 1 << 0;
            var ARGS_ARE_XY_VALUES = 1 << 1;
            var WE_HAVE_A_SCALE = 1 << 3;
            var MORE_COMPONENTS = 1 << 5;
            var WE_HAVE_AN_X_AND_Y_SCALE = 1 << 6;
            var WE_HAVE_A_TWO_BY_TWO = 1 << 7;
            var WE_HAVE_INSTRUCTIONS = 1 << 8;
            gl.parts = [];
            var flags;
            do {
                flags = bin.readUshort(data, offset);
                offset += 2;
                var part = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
                gl.parts.push(part);
                part.glyphIndex = bin.readUshort(data, offset);
                offset += 2;
                if (flags & ARG_1_AND_2_ARE_WORDS) {
                    var arg1 = bin.readShort(data, offset);
                    offset += 2;
                    var arg2 = bin.readShort(data, offset);
                    offset += 2;
                } else {
                    var arg1 = bin.readInt8(data, offset);
                    offset++;
                    var arg2 = bin.readInt8(data, offset);
                    offset++;
                }
                if (flags & ARGS_ARE_XY_VALUES) {
                    part.m.tx = arg1;
                    part.m.ty = arg2;
                } else {
                    part.p1 = arg1;
                    part.p2 = arg2;
                }
                if (flags & WE_HAVE_A_SCALE) {
                    part.m.a = part.m.d = bin.readF2dot14(data, offset);
                    offset += 2;
                } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
                    part.m.a = bin.readF2dot14(data, offset);
                    offset += 2;
                    part.m.d = bin.readF2dot14(data, offset);
                    offset += 2;
                } else if (flags & WE_HAVE_A_TWO_BY_TWO) {
                    part.m.a = bin.readF2dot14(data, offset);
                    offset += 2;
                    part.m.b = bin.readF2dot14(data, offset);
                    offset += 2;
                    part.m.c = bin.readF2dot14(data, offset);
                    offset += 2;
                    part.m.d = bin.readF2dot14(data, offset);
                    offset += 2;
                }
            } while (flags & MORE_COMPONENTS);
            if (flags & WE_HAVE_INSTRUCTIONS) {
                var numInstr = bin.readUshort(data, offset);
                offset += 2;
                gl.instr = [];
                for (var i = 0; i < numInstr; i++) {
                    gl.instr.push(data[offset]);
                    offset++;
                }
            }
        }
        return gl;
    };
    Typr.GPOS = {};
    Typr.GPOS.parse = function(data, offset, length, font) {
        return Typr._lctf.parse(data, offset, length, font, Typr.GPOS.subt);
    };
    Typr.GPOS.subt = function(data, ltype, offset, ltable) {
        var bin = Typr._bin, offset0 = offset, tab = {};
        tab.fmt = bin.readUshort(data, offset);
        offset += 2;
        if (ltype == 1 || ltype == 2 || ltype == 3 || ltype == 7 || ltype == 8 && tab.fmt <= 2) {
            var covOff = bin.readUshort(data, offset);
            offset += 2;
            tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0);
        }
        if (ltype == 1 && tab.fmt == 1) {
            var valFmt1 = bin.readUshort(data, offset);
            offset += 2;
            var ones1 = Typr._lctf.numOfOnes(valFmt1);
            if (valFmt1 != 0)
                tab.pos = Typr.GPOS.readValueRecord(data, offset, valFmt1);
        } else if (ltype == 2 && tab.fmt >= 1 && tab.fmt <= 2) {
            var valFmt1 = bin.readUshort(data, offset);
            offset += 2;
            var valFmt2 = bin.readUshort(data, offset);
            offset += 2;
            var ones1 = Typr._lctf.numOfOnes(valFmt1);
            var ones2 = Typr._lctf.numOfOnes(valFmt2);
            if (tab.fmt == 1) {
                tab.pairsets = [];
                var psc = bin.readUshort(data, offset);
                offset += 2;
                for (var i = 0; i < psc; i++) {
                    var psoff = offset0 + bin.readUshort(data, offset);
                    offset += 2;
                    var pvc = bin.readUshort(data, psoff);
                    psoff += 2;
                    var arr = [];
                    for (var j = 0; j < pvc; j++) {
                        var gid2 = bin.readUshort(data, psoff);
                        psoff += 2;
                        var value1, value2;
                        if (valFmt1 != 0) {
                            value1 = Typr.GPOS.readValueRecord(data, psoff, valFmt1);
                            psoff += ones1 * 2;
                        }
                        if (valFmt2 != 0) {
                            value2 = Typr.GPOS.readValueRecord(data, psoff, valFmt2);
                            psoff += ones2 * 2;
                        }
                        arr.push({ gid2, val1: value1, val2: value2 });
                    }
                    tab.pairsets.push(arr);
                }
            }
            if (tab.fmt == 2) {
                var classDef1 = bin.readUshort(data, offset);
                offset += 2;
                var classDef2 = bin.readUshort(data, offset);
                offset += 2;
                var class1Count = bin.readUshort(data, offset);
                offset += 2;
                var class2Count = bin.readUshort(data, offset);
                offset += 2;
                tab.classDef1 = Typr._lctf.readClassDef(data, offset0 + classDef1);
                tab.classDef2 = Typr._lctf.readClassDef(data, offset0 + classDef2);
                tab.matrix = [];
                for (var i = 0; i < class1Count; i++) {
                    var row = [];
                    for (var j = 0; j < class2Count; j++) {
                        var value1 = null, value2 = null;
                        if (valFmt1 != 0) {
                            value1 = Typr.GPOS.readValueRecord(data, offset, valFmt1);
                            offset += ones1 * 2;
                        }
                        if (valFmt2 != 0) {
                            value2 = Typr.GPOS.readValueRecord(data, offset, valFmt2);
                            offset += ones2 * 2;
                        }
                        row.push({ val1: value1, val2: value2 });
                    }
                    tab.matrix.push(row);
                }
            }
        } else if (ltype == 9 && tab.fmt == 1) {
            var extType = bin.readUshort(data, offset);
            offset += 2;
            var extOffset = bin.readUint(data, offset);
            offset += 4;
            if (ltable.ltype == 9) {
                ltable.ltype = extType;
            } else if (ltable.ltype != extType) {
                throw "invalid extension substitution";
            }
            return Typr.GPOS.subt(data, ltable.ltype, offset0 + extOffset);
        } else
            console.warn("unsupported GPOS table LookupType", ltype, "format", tab.fmt);
        return tab;
    };
    Typr.GPOS.readValueRecord = function(data, offset, valFmt) {
        var bin = Typr._bin;
        var arr = [];
        arr.push(valFmt & 1 ? bin.readShort(data, offset) : 0);
        offset += valFmt & 1 ? 2 : 0;
        arr.push(valFmt & 2 ? bin.readShort(data, offset) : 0);
        offset += valFmt & 2 ? 2 : 0;
        arr.push(valFmt & 4 ? bin.readShort(data, offset) : 0);
        offset += valFmt & 4 ? 2 : 0;
        arr.push(valFmt & 8 ? bin.readShort(data, offset) : 0);
        offset += valFmt & 8 ? 2 : 0;
        return arr;
    };
    Typr.GSUB = {};
    Typr.GSUB.parse = function(data, offset, length, font) {
        return Typr._lctf.parse(data, offset, length, font, Typr.GSUB.subt);
    };
    Typr.GSUB.subt = function(data, ltype, offset, ltable) {
        var bin = Typr._bin, offset0 = offset, tab = {};
        tab.fmt = bin.readUshort(data, offset);
        offset += 2;
        if (ltype != 1 && ltype != 4 && ltype != 5 && ltype != 6)
            return null;
        if (ltype == 1 || ltype == 4 || ltype == 5 && tab.fmt <= 2 || ltype == 6 && tab.fmt <= 2) {
            var covOff = bin.readUshort(data, offset);
            offset += 2;
            tab.coverage = Typr._lctf.readCoverage(data, offset0 + covOff);
        }
        if (ltype == 1 && tab.fmt >= 1 && tab.fmt <= 2) {
            if (tab.fmt == 1) {
                tab.delta = bin.readShort(data, offset);
                offset += 2;
            } else if (tab.fmt == 2) {
                var cnt = bin.readUshort(data, offset);
                offset += 2;
                tab.newg = bin.readUshorts(data, offset, cnt);
                offset += tab.newg.length * 2;
            }
        } else if (ltype == 4) {
            tab.vals = [];
            var cnt = bin.readUshort(data, offset);
            offset += 2;
            for (var i = 0; i < cnt; i++) {
                var loff = bin.readUshort(data, offset);
                offset += 2;
                tab.vals.push(Typr.GSUB.readLigatureSet(data, offset0 + loff));
            }
        } else if (ltype == 5 && tab.fmt == 2) {
            if (tab.fmt == 2) {
                var cDefOffset = bin.readUshort(data, offset);
                offset += 2;
                tab.cDef = Typr._lctf.readClassDef(data, offset0 + cDefOffset);
                tab.scset = [];
                var subClassSetCount = bin.readUshort(data, offset);
                offset += 2;
                for (var i = 0; i < subClassSetCount; i++) {
                    var scsOff = bin.readUshort(data, offset);
                    offset += 2;
                    tab.scset.push(scsOff == 0 ? null : Typr.GSUB.readSubClassSet(data, offset0 + scsOff));
                }
            }
        } else if (ltype == 6 && tab.fmt == 3) {
            if (tab.fmt == 3) {
                for (var i = 0; i < 3; i++) {
                    var cnt = bin.readUshort(data, offset);
                    offset += 2;
                    var cvgs = [];
                    for (var j = 0; j < cnt; j++)
                        cvgs.push(Typr._lctf.readCoverage(data, offset0 + bin.readUshort(data, offset + j * 2)));
                    offset += cnt * 2;
                    if (i == 0)
                        tab.backCvg = cvgs;
                    if (i == 1)
                        tab.inptCvg = cvgs;
                    if (i == 2)
                        tab.ahedCvg = cvgs;
                }
                var cnt = bin.readUshort(data, offset);
                offset += 2;
                tab.lookupRec = Typr.GSUB.readSubstLookupRecords(data, offset, cnt);
            }
        } else if (ltype == 7 && tab.fmt == 1) {
            var extType = bin.readUshort(data, offset);
            offset += 2;
            var extOffset = bin.readUint(data, offset);
            offset += 4;
            if (ltable.ltype == 9) {
                ltable.ltype = extType;
            } else if (ltable.ltype != extType) {
                throw "invalid extension substitution";
            }
            return Typr.GSUB.subt(data, ltable.ltype, offset0 + extOffset);
        } else
            console.warn("unsupported GSUB table LookupType", ltype, "format", tab.fmt);
        return tab;
    };
    Typr.GSUB.readSubClassSet = function(data, offset) {
        var rUs = Typr._bin.readUshort, offset0 = offset, lset = [];
        var cnt = rUs(data, offset);
        offset += 2;
        for (var i = 0; i < cnt; i++) {
            var loff = rUs(data, offset);
            offset += 2;
            lset.push(Typr.GSUB.readSubClassRule(data, offset0 + loff));
        }
        return lset;
    };
    Typr.GSUB.readSubClassRule = function(data, offset) {
        var rUs = Typr._bin.readUshort, rule = {};
        var gcount = rUs(data, offset);
        offset += 2;
        var scount = rUs(data, offset);
        offset += 2;
        rule.input = [];
        for (var i = 0; i < gcount - 1; i++) {
            rule.input.push(rUs(data, offset));
            offset += 2;
        }
        rule.substLookupRecords = Typr.GSUB.readSubstLookupRecords(data, offset, scount);
        return rule;
    };
    Typr.GSUB.readSubstLookupRecords = function(data, offset, cnt) {
        var rUs = Typr._bin.readUshort;
        var out = [];
        for (var i = 0; i < cnt; i++) {
            out.push(rUs(data, offset), rUs(data, offset + 2));
            offset += 4;
        }
        return out;
    };
    Typr.GSUB.readChainSubClassSet = function(data, offset) {
        var bin = Typr._bin, offset0 = offset, lset = [];
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < cnt; i++) {
            var loff = bin.readUshort(data, offset);
            offset += 2;
            lset.push(Typr.GSUB.readChainSubClassRule(data, offset0 + loff));
        }
        return lset;
    };
    Typr.GSUB.readChainSubClassRule = function(data, offset) {
        var bin = Typr._bin, rule = {};
        var pps = ["backtrack", "input", "lookahead"];
        for (var pi = 0; pi < pps.length; pi++) {
            var cnt = bin.readUshort(data, offset);
            offset += 2;
            if (pi == 1)
                cnt--;
            rule[pps[pi]] = bin.readUshorts(data, offset, cnt);
            offset += rule[pps[pi]].length * 2;
        }
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        rule.subst = bin.readUshorts(data, offset, cnt * 2);
        offset += rule.subst.length * 2;
        return rule;
    };
    Typr.GSUB.readLigatureSet = function(data, offset) {
        var bin = Typr._bin, offset0 = offset, lset = [];
        var lcnt = bin.readUshort(data, offset);
        offset += 2;
        for (var j = 0; j < lcnt; j++) {
            var loff = bin.readUshort(data, offset);
            offset += 2;
            lset.push(Typr.GSUB.readLigature(data, offset0 + loff));
        }
        return lset;
    };
    Typr.GSUB.readLigature = function(data, offset) {
        var bin = Typr._bin, lig = { chain: [] };
        lig.nglyph = bin.readUshort(data, offset);
        offset += 2;
        var ccnt = bin.readUshort(data, offset);
        offset += 2;
        for (var k = 0; k < ccnt - 1; k++) {
            lig.chain.push(bin.readUshort(data, offset));
            offset += 2;
        }
        return lig;
    };
    Typr.head = {};
    Typr.head.parse = function(data, offset, length) {
        var bin = Typr._bin;
        var obj = {};
        bin.readFixed(data, offset);
        offset += 4;
        obj.fontRevision = bin.readFixed(data, offset);
        offset += 4;
        bin.readUint(data, offset);
        offset += 4;
        bin.readUint(data, offset);
        offset += 4;
        obj.flags = bin.readUshort(data, offset);
        offset += 2;
        obj.unitsPerEm = bin.readUshort(data, offset);
        offset += 2;
        obj.created = bin.readUint64(data, offset);
        offset += 8;
        obj.modified = bin.readUint64(data, offset);
        offset += 8;
        obj.xMin = bin.readShort(data, offset);
        offset += 2;
        obj.yMin = bin.readShort(data, offset);
        offset += 2;
        obj.xMax = bin.readShort(data, offset);
        offset += 2;
        obj.yMax = bin.readShort(data, offset);
        offset += 2;
        obj.macStyle = bin.readUshort(data, offset);
        offset += 2;
        obj.lowestRecPPEM = bin.readUshort(data, offset);
        offset += 2;
        obj.fontDirectionHint = bin.readShort(data, offset);
        offset += 2;
        obj.indexToLocFormat = bin.readShort(data, offset);
        offset += 2;
        obj.glyphDataFormat = bin.readShort(data, offset);
        offset += 2;
        return obj;
    };
    Typr.hhea = {};
    Typr.hhea.parse = function(data, offset, length) {
        var bin = Typr._bin;
        var obj = {};
        bin.readFixed(data, offset);
        offset += 4;
        obj.ascender = bin.readShort(data, offset);
        offset += 2;
        obj.descender = bin.readShort(data, offset);
        offset += 2;
        obj.lineGap = bin.readShort(data, offset);
        offset += 2;
        obj.advanceWidthMax = bin.readUshort(data, offset);
        offset += 2;
        obj.minLeftSideBearing = bin.readShort(data, offset);
        offset += 2;
        obj.minRightSideBearing = bin.readShort(data, offset);
        offset += 2;
        obj.xMaxExtent = bin.readShort(data, offset);
        offset += 2;
        obj.caretSlopeRise = bin.readShort(data, offset);
        offset += 2;
        obj.caretSlopeRun = bin.readShort(data, offset);
        offset += 2;
        obj.caretOffset = bin.readShort(data, offset);
        offset += 2;
        offset += 4 * 2;
        obj.metricDataFormat = bin.readShort(data, offset);
        offset += 2;
        obj.numberOfHMetrics = bin.readUshort(data, offset);
        offset += 2;
        return obj;
    };
    Typr.hmtx = {};
    Typr.hmtx.parse = function(data, offset, length, font) {
        var bin = Typr._bin;
        var obj = {};
        obj.aWidth = [];
        obj.lsBearing = [];
        var aw = 0, lsb = 0;
        for (var i = 0; i < font.maxp.numGlyphs; i++) {
            if (i < font.hhea.numberOfHMetrics) {
                aw = bin.readUshort(data, offset);
                offset += 2;
                lsb = bin.readShort(data, offset);
                offset += 2;
            }
            obj.aWidth.push(aw);
            obj.lsBearing.push(lsb);
        }
        return obj;
    };
    Typr.kern = {};
    Typr.kern.parse = function(data, offset, length, font) {
        var bin = Typr._bin;
        var version = bin.readUshort(data, offset);
        offset += 2;
        if (version == 1)
            return Typr.kern.parseV1(data, offset - 2, length, font);
        var nTables = bin.readUshort(data, offset);
        offset += 2;
        var map2 = { glyph1: [], rval: [] };
        for (var i = 0; i < nTables; i++) {
            offset += 2;
            var length = bin.readUshort(data, offset);
            offset += 2;
            var coverage = bin.readUshort(data, offset);
            offset += 2;
            var format = coverage >>> 8;
            format &= 15;
            if (format == 0)
                offset = Typr.kern.readFormat0(data, offset, map2);
            else
                throw "unknown kern table format: " + format;
        }
        return map2;
    };
    Typr.kern.parseV1 = function(data, offset, length, font) {
        var bin = Typr._bin;
        bin.readFixed(data, offset);
        offset += 4;
        var nTables = bin.readUint(data, offset);
        offset += 4;
        var map2 = { glyph1: [], rval: [] };
        for (var i = 0; i < nTables; i++) {
            bin.readUint(data, offset);
            offset += 4;
            var coverage = bin.readUshort(data, offset);
            offset += 2;
            bin.readUshort(data, offset);
            offset += 2;
            var format = coverage >>> 8;
            format &= 15;
            if (format == 0)
                offset = Typr.kern.readFormat0(data, offset, map2);
            else
                throw "unknown kern table format: " + format;
        }
        return map2;
    };
    Typr.kern.readFormat0 = function(data, offset, map2) {
        var bin = Typr._bin;
        var pleft = -1;
        var nPairs = bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        for (var j = 0; j < nPairs; j++) {
            var left = bin.readUshort(data, offset);
            offset += 2;
            var right = bin.readUshort(data, offset);
            offset += 2;
            var value = bin.readShort(data, offset);
            offset += 2;
            if (left != pleft) {
                map2.glyph1.push(left);
                map2.rval.push({ glyph2: [], vals: [] });
            }
            var rval = map2.rval[map2.rval.length - 1];
            rval.glyph2.push(right);
            rval.vals.push(value);
            pleft = left;
        }
        return offset;
    };
    Typr.loca = {};
    Typr.loca.parse = function(data, offset, length, font) {
        var bin = Typr._bin;
        var obj = [];
        var ver = font.head.indexToLocFormat;
        var len = font.maxp.numGlyphs + 1;
        if (ver == 0)
            for (var i = 0; i < len; i++)
                obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
        if (ver == 1)
            for (var i = 0; i < len; i++)
                obj.push(bin.readUint(data, offset + (i << 2)));
        return obj;
    };
    Typr.maxp = {};
    Typr.maxp.parse = function(data, offset, length) {
        var bin = Typr._bin;
        var obj = {};
        var ver = bin.readUint(data, offset);
        offset += 4;
        obj.numGlyphs = bin.readUshort(data, offset);
        offset += 2;
        if (ver == 65536) {
            obj.maxPoints = bin.readUshort(data, offset);
            offset += 2;
            obj.maxContours = bin.readUshort(data, offset);
            offset += 2;
            obj.maxCompositePoints = bin.readUshort(data, offset);
            offset += 2;
            obj.maxCompositeContours = bin.readUshort(data, offset);
            offset += 2;
            obj.maxZones = bin.readUshort(data, offset);
            offset += 2;
            obj.maxTwilightPoints = bin.readUshort(data, offset);
            offset += 2;
            obj.maxStorage = bin.readUshort(data, offset);
            offset += 2;
            obj.maxFunctionDefs = bin.readUshort(data, offset);
            offset += 2;
            obj.maxInstructionDefs = bin.readUshort(data, offset);
            offset += 2;
            obj.maxStackElements = bin.readUshort(data, offset);
            offset += 2;
            obj.maxSizeOfInstructions = bin.readUshort(data, offset);
            offset += 2;
            obj.maxComponentElements = bin.readUshort(data, offset);
            offset += 2;
            obj.maxComponentDepth = bin.readUshort(data, offset);
            offset += 2;
        }
        return obj;
    };
    Typr.name = {};
    Typr.name.parse = function(data, offset, length) {
        var bin = Typr._bin;
        var obj = {};
        bin.readUshort(data, offset);
        offset += 2;
        var count = bin.readUshort(data, offset);
        offset += 2;
        bin.readUshort(data, offset);
        offset += 2;
        var names = [
            "copyright",
            "fontFamily",
            "fontSubfamily",
            "ID",
            "fullName",
            "version",
            "postScriptName",
            "trademark",
            "manufacturer",
            "designer",
            "description",
            "urlVendor",
            "urlDesigner",
            "licence",
            "licenceURL",
            "---",
            "typoFamilyName",
            "typoSubfamilyName",
            "compatibleFull",
            "sampleText",
            "postScriptCID",
            "wwsFamilyName",
            "wwsSubfamilyName",
            "lightPalette",
            "darkPalette"
        ];
        var offset0 = offset;
        for (var i = 0; i < count; i++) {
            var platformID = bin.readUshort(data, offset);
            offset += 2;
            var encodingID = bin.readUshort(data, offset);
            offset += 2;
            var languageID = bin.readUshort(data, offset);
            offset += 2;
            var nameID = bin.readUshort(data, offset);
            offset += 2;
            var slen = bin.readUshort(data, offset);
            offset += 2;
            var noffset = bin.readUshort(data, offset);
            offset += 2;
            var cname = names[nameID];
            var soff = offset0 + count * 12 + noffset;
            var str;
            if (platformID == 0)
                str = bin.readUnicode(data, soff, slen / 2);
            else if (platformID == 3 && encodingID == 0)
                str = bin.readUnicode(data, soff, slen / 2);
            else if (encodingID == 0)
                str = bin.readASCII(data, soff, slen);
            else if (encodingID == 1)
                str = bin.readUnicode(data, soff, slen / 2);
            else if (encodingID == 3)
                str = bin.readUnicode(data, soff, slen / 2);
            else if (platformID == 1) {
                str = bin.readASCII(data, soff, slen);
                console.warn("reading unknown MAC encoding " + encodingID + " as ASCII");
            } else
                throw "unknown encoding " + encodingID + ", platformID: " + platformID;
            var tid = "p" + platformID + "," + languageID.toString(16);
            if (obj[tid] == null)
                obj[tid] = {};
            obj[tid][cname !== void 0 ? cname : nameID] = str;
            obj[tid]._lang = languageID;
        }
        for (var p in obj)
            if (obj[p].postScriptName != null && obj[p]._lang == 1033)
                return obj[p];
        for (var p in obj)
            if (obj[p].postScriptName != null && obj[p]._lang == 0)
                return obj[p];
        for (var p in obj)
            if (obj[p].postScriptName != null && obj[p]._lang == 3084)
                return obj[p];
        for (var p in obj)
            if (obj[p].postScriptName != null)
                return obj[p];
        var tname;
        for (var p in obj) {
            tname = p;
            break;
        }
        console.warn("returning name table with languageID " + obj[tname]._lang);
        return obj[tname];
    };
    Typr["OS/2"] = {};
    Typr["OS/2"].parse = function(data, offset, length) {
        var bin = Typr._bin;
        var ver = bin.readUshort(data, offset);
        offset += 2;
        var obj = {};
        if (ver == 0)
            Typr["OS/2"].version0(data, offset, obj);
        else if (ver == 1)
            Typr["OS/2"].version1(data, offset, obj);
        else if (ver == 2 || ver == 3 || ver == 4)
            Typr["OS/2"].version2(data, offset, obj);
        else if (ver == 5)
            Typr["OS/2"].version5(data, offset, obj);
        else
            throw "unknown OS/2 table version: " + ver;
        return obj;
    };
    Typr["OS/2"].version0 = function(data, offset, obj) {
        var bin = Typr._bin;
        obj.xAvgCharWidth = bin.readShort(data, offset);
        offset += 2;
        obj.usWeightClass = bin.readUshort(data, offset);
        offset += 2;
        obj.usWidthClass = bin.readUshort(data, offset);
        offset += 2;
        obj.fsType = bin.readUshort(data, offset);
        offset += 2;
        obj.ySubscriptXSize = bin.readShort(data, offset);
        offset += 2;
        obj.ySubscriptYSize = bin.readShort(data, offset);
        offset += 2;
        obj.ySubscriptXOffset = bin.readShort(data, offset);
        offset += 2;
        obj.ySubscriptYOffset = bin.readShort(data, offset);
        offset += 2;
        obj.ySuperscriptXSize = bin.readShort(data, offset);
        offset += 2;
        obj.ySuperscriptYSize = bin.readShort(data, offset);
        offset += 2;
        obj.ySuperscriptXOffset = bin.readShort(data, offset);
        offset += 2;
        obj.ySuperscriptYOffset = bin.readShort(data, offset);
        offset += 2;
        obj.yStrikeoutSize = bin.readShort(data, offset);
        offset += 2;
        obj.yStrikeoutPosition = bin.readShort(data, offset);
        offset += 2;
        obj.sFamilyClass = bin.readShort(data, offset);
        offset += 2;
        obj.panose = bin.readBytes(data, offset, 10);
        offset += 10;
        obj.ulUnicodeRange1 = bin.readUint(data, offset);
        offset += 4;
        obj.ulUnicodeRange2 = bin.readUint(data, offset);
        offset += 4;
        obj.ulUnicodeRange3 = bin.readUint(data, offset);
        offset += 4;
        obj.ulUnicodeRange4 = bin.readUint(data, offset);
        offset += 4;
        obj.achVendID = [bin.readInt8(data, offset), bin.readInt8(data, offset + 1), bin.readInt8(data, offset + 2), bin.readInt8(data, offset + 3)];
        offset += 4;
        obj.fsSelection = bin.readUshort(data, offset);
        offset += 2;
        obj.usFirstCharIndex = bin.readUshort(data, offset);
        offset += 2;
        obj.usLastCharIndex = bin.readUshort(data, offset);
        offset += 2;
        obj.sTypoAscender = bin.readShort(data, offset);
        offset += 2;
        obj.sTypoDescender = bin.readShort(data, offset);
        offset += 2;
        obj.sTypoLineGap = bin.readShort(data, offset);
        offset += 2;
        obj.usWinAscent = bin.readUshort(data, offset);
        offset += 2;
        obj.usWinDescent = bin.readUshort(data, offset);
        offset += 2;
        return offset;
    };
    Typr["OS/2"].version1 = function(data, offset, obj) {
        var bin = Typr._bin;
        offset = Typr["OS/2"].version0(data, offset, obj);
        obj.ulCodePageRange1 = bin.readUint(data, offset);
        offset += 4;
        obj.ulCodePageRange2 = bin.readUint(data, offset);
        offset += 4;
        return offset;
    };
    Typr["OS/2"].version2 = function(data, offset, obj) {
        var bin = Typr._bin;
        offset = Typr["OS/2"].version1(data, offset, obj);
        obj.sxHeight = bin.readShort(data, offset);
        offset += 2;
        obj.sCapHeight = bin.readShort(data, offset);
        offset += 2;
        obj.usDefault = bin.readUshort(data, offset);
        offset += 2;
        obj.usBreak = bin.readUshort(data, offset);
        offset += 2;
        obj.usMaxContext = bin.readUshort(data, offset);
        offset += 2;
        return offset;
    };
    Typr["OS/2"].version5 = function(data, offset, obj) {
        var bin = Typr._bin;
        offset = Typr["OS/2"].version2(data, offset, obj);
        obj.usLowerOpticalPointSize = bin.readUshort(data, offset);
        offset += 2;
        obj.usUpperOpticalPointSize = bin.readUshort(data, offset);
        offset += 2;
        return offset;
    };
    Typr.post = {};
    Typr.post.parse = function(data, offset, length) {
        var bin = Typr._bin;
        var obj = {};
        obj.version = bin.readFixed(data, offset);
        offset += 4;
        obj.italicAngle = bin.readFixed(data, offset);
        offset += 4;
        obj.underlinePosition = bin.readShort(data, offset);
        offset += 2;
        obj.underlineThickness = bin.readShort(data, offset);
        offset += 2;
        return obj;
    };
    Typr.SVG = {};
    Typr.SVG.parse = function(data, offset, length) {
        var bin = Typr._bin;
        var obj = { entries: [] };
        var offset0 = offset;
        bin.readUshort(data, offset);
        offset += 2;
        var svgDocIndexOffset = bin.readUint(data, offset);
        offset += 4;
        bin.readUint(data, offset);
        offset += 4;
        offset = svgDocIndexOffset + offset0;
        var numEntries = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < numEntries; i++) {
            var startGlyphID = bin.readUshort(data, offset);
            offset += 2;
            var endGlyphID = bin.readUshort(data, offset);
            offset += 2;
            var svgDocOffset = bin.readUint(data, offset);
            offset += 4;
            var svgDocLength = bin.readUint(data, offset);
            offset += 4;
            var sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength);
            var svg = bin.readUTF8(sbuf, 0, sbuf.length);
            for (var f = startGlyphID; f <= endGlyphID; f++) {
                obj.entries[f] = svg;
            }
        }
        return obj;
    };
    Typr.SVG.toPath = function(str) {
        var pth = { cmds: [], crds: [] };
        if (str == null)
            return pth;
        var prsr = new DOMParser();
        var doc = prsr["parseFromString"](str, "image/svg+xml");
        var svg = doc.firstChild;
        while (svg.tagName != "svg")
            svg = svg.nextSibling;
        var vb = svg.getAttribute("viewBox");
        if (vb)
            vb = vb.trim().split(" ").map(parseFloat);
        else
            vb = [0, 0, 1e3, 1e3];
        Typr.SVG._toPath(svg.children, pth);
        for (var i = 0; i < pth.crds.length; i += 2) {
            var x = pth.crds[i], y = pth.crds[i + 1];
            x -= vb[0];
            y -= vb[1];
            y = -y;
            pth.crds[i] = x;
            pth.crds[i + 1] = y;
        }
        return pth;
    };
    Typr.SVG._toPath = function(nds, pth, fill) {
        for (var ni = 0; ni < nds.length; ni++) {
            var nd = nds[ni], tn = nd.tagName;
            var cfl = nd.getAttribute("fill");
            if (cfl == null)
                cfl = fill;
            if (tn == "g")
                Typr.SVG._toPath(nd.children, pth, cfl);
            else if (tn == "path") {
                pth.cmds.push(cfl ? cfl : "#000000");
                var d = nd.getAttribute("d");
                var toks = Typr.SVG._tokens(d);
                Typr.SVG._toksToPath(toks, pth);
                pth.cmds.push("X");
            } else if (tn == "defs")
                ;
            else
                console.warn(tn, nd);
        }
    };
    Typr.SVG._tokens = function(d) {
        var ts = [], off = 0, rn = false, cn = "";
        while (off < d.length) {
            var cc = d.charCodeAt(off), ch = d.charAt(off);
            off++;
            var isNum = 48 <= cc && cc <= 57 || ch == "." || ch == "-";
            if (rn) {
                if (ch == "-") {
                    ts.push(parseFloat(cn));
                    cn = ch;
                } else if (isNum)
                    cn += ch;
                else {
                    ts.push(parseFloat(cn));
                    if (ch != "," && ch != " ")
                        ts.push(ch);
                    rn = false;
                }
            } else {
                if (isNum) {
                    cn = ch;
                    rn = true;
                } else if (ch != "," && ch != " ")
                    ts.push(ch);
            }
        }
        if (rn)
            ts.push(parseFloat(cn));
        return ts;
    };
    Typr.SVG._toksToPath = function(ts, pth) {
        var i = 0, x = 0, y = 0, ox = 0, oy = 0;
        var pc = { "M": 2, "L": 2, "H": 1, "V": 1, "S": 4, "C": 6 };
        var cmds = pth.cmds, crds = pth.crds;
        while (i < ts.length) {
            var cmd = ts[i];
            i++;
            if (cmd == "z") {
                cmds.push("Z");
                x = ox;
                y = oy;
            } else {
                var cmu = cmd.toUpperCase();
                var ps = pc[cmu], reps = Typr.SVG._reps(ts, i, ps);
                for (var j = 0; j < reps; j++) {
                    var xi = 0, yi = 0;
                    if (cmd != cmu) {
                        xi = x;
                        yi = y;
                    }
                    if (cmu == "M") {
                        x = xi + ts[i++];
                        y = yi + ts[i++];
                        cmds.push("M");
                        crds.push(x, y);
                        ox = x;
                        oy = y;
                    } else if (cmu == "L") {
                        x = xi + ts[i++];
                        y = yi + ts[i++];
                        cmds.push("L");
                        crds.push(x, y);
                    } else if (cmu == "H") {
                        x = xi + ts[i++];
                        cmds.push("L");
                        crds.push(x, y);
                    } else if (cmu == "V") {
                        y = yi + ts[i++];
                        cmds.push("L");
                        crds.push(x, y);
                    } else if (cmu == "C") {
                        var x1 = xi + ts[i++], y1 = yi + ts[i++], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
                        cmds.push("C");
                        crds.push(x1, y1, x2, y2, x3, y3);
                        x = x3;
                        y = y3;
                    } else if (cmu == "S") {
                        var co = Math.max(crds.length - 4, 0);
                        var x1 = x + x - crds[co], y1 = y + y - crds[co + 1];
                        var x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
                        cmds.push("C");
                        crds.push(x1, y1, x2, y2, x3, y3);
                        x = x3;
                        y = y3;
                    } else
                        console.warn("Unknown SVG command " + cmd);
                }
            }
        }
    };
    Typr.SVG._reps = function(ts, off, ps) {
        var i = off;
        while (i < ts.length) {
            if (typeof ts[i] == "string")
                break;
            i += ps;
        }
        return (i - off) / ps;
    };
    if (Typr == null)
        Typr = {};
    if (Typr.U == null)
        Typr.U = {};
    Typr.U.codeToGlyph = function(font, code) {
        var cmap = font.cmap;
        var tind = -1;
        if (cmap.p0e4 != null)
            tind = cmap.p0e4;
        else if (cmap.p3e1 != null)
            tind = cmap.p3e1;
        else if (cmap.p1e0 != null)
            tind = cmap.p1e0;
        else if (cmap.p0e3 != null)
            tind = cmap.p0e3;
        if (tind == -1)
            throw "no familiar platform and encoding!";
        var tab = cmap.tables[tind];
        if (tab.format == 0) {
            if (code >= tab.map.length)
                return 0;
            return tab.map[code];
        } else if (tab.format == 4) {
            var sind = -1;
            for (var i = 0; i < tab.endCount.length; i++) {
                if (code <= tab.endCount[i]) {
                    sind = i;
                    break;
                }
            }
            if (sind == -1)
                return 0;
            if (tab.startCount[sind] > code)
                return 0;
            var gli = 0;
            if (tab.idRangeOffset[sind] != 0) {
                gli = tab.glyphIdArray[code - tab.startCount[sind] + (tab.idRangeOffset[sind] >> 1) - (tab.idRangeOffset.length - sind)];
            } else {
                gli = code + tab.idDelta[sind];
            }
            return gli & 65535;
        } else if (tab.format == 12) {
            if (code > tab.groups[tab.groups.length - 1][1])
                return 0;
            for (var i = 0; i < tab.groups.length; i++) {
                var grp = tab.groups[i];
                if (grp[0] <= code && code <= grp[1])
                    return grp[2] + (code - grp[0]);
            }
            return 0;
        } else {
            throw "unknown cmap table format " + tab.format;
        }
    };
    Typr.U.glyphToPath = function(font, gid) {
        var path = { cmds: [], crds: [] };
        if (font.SVG && font.SVG.entries[gid]) {
            var p = font.SVG.entries[gid];
            if (p == null)
                return path;
            if (typeof p == "string") {
                p = Typr.SVG.toPath(p);
                font.SVG.entries[gid] = p;
            }
            return p;
        } else if (font.CFF) {
            var state = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: font.CFF.Private ? font.CFF.Private.defaultWidthX : 0, open: false };
            var cff = font.CFF, pdct = font.CFF.Private;
            if (cff.ROS) {
                var gi = 0;
                while (cff.FDSelect[gi + 2] <= gid)
                    gi += 2;
                pdct = cff.FDArray[cff.FDSelect[gi + 1]].Private;
            }
            Typr.U._drawCFF(font.CFF.CharStrings[gid], state, cff, pdct, path);
        } else if (font.glyf) {
            Typr.U._drawGlyf(gid, font, path);
        }
        return path;
    };
    Typr.U._drawGlyf = function(gid, font, path) {
        var gl = font.glyf[gid];
        if (gl == null)
            gl = font.glyf[gid] = Typr.glyf._parseGlyf(font, gid);
        if (gl != null) {
            if (gl.noc > -1) {
                Typr.U._simpleGlyph(gl, path);
            } else {
                Typr.U._compoGlyph(gl, font, path);
            }
        }
    };
    Typr.U._simpleGlyph = function(gl, p) {
        for (var c = 0; c < gl.noc; c++) {
            var i0 = c == 0 ? 0 : gl.endPts[c - 1] + 1;
            var il = gl.endPts[c];
            for (var i = i0; i <= il; i++) {
                var pr = i == i0 ? il : i - 1;
                var nx = i == il ? i0 : i + 1;
                var onCurve = gl.flags[i] & 1;
                var prOnCurve = gl.flags[pr] & 1;
                var nxOnCurve = gl.flags[nx] & 1;
                var x = gl.xs[i], y = gl.ys[i];
                if (i == i0) {
                    if (onCurve) {
                        if (prOnCurve) {
                            Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
                        } else {
                            Typr.U.P.moveTo(p, x, y);
                            continue;
                        }
                    } else {
                        if (prOnCurve) {
                            Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
                        } else {
                            Typr.U.P.moveTo(p, (gl.xs[pr] + x) / 2, (gl.ys[pr] + y) / 2);
                        }
                    }
                }
                if (onCurve) {
                    if (prOnCurve)
                        Typr.U.P.lineTo(p, x, y);
                } else {
                    if (nxOnCurve) {
                        Typr.U.P.qcurveTo(p, x, y, gl.xs[nx], gl.ys[nx]);
                    } else {
                        Typr.U.P.qcurveTo(p, x, y, (x + gl.xs[nx]) / 2, (y + gl.ys[nx]) / 2);
                    }
                }
            }
            Typr.U.P.closePath(p);
        }
    };
    Typr.U._compoGlyph = function(gl, font, p) {
        for (var j = 0; j < gl.parts.length; j++) {
            var path = { cmds: [], crds: [] };
            var prt = gl.parts[j];
            Typr.U._drawGlyf(prt.glyphIndex, font, path);
            var m = prt.m;
            for (var i = 0; i < path.crds.length; i += 2) {
                var x = path.crds[i], y = path.crds[i + 1];
                p.crds.push(x * m.a + y * m.b + m.tx);
                p.crds.push(x * m.c + y * m.d + m.ty);
            }
            for (var i = 0; i < path.cmds.length; i++) {
                p.cmds.push(path.cmds[i]);
            }
        }
    };
    Typr.U._getGlyphClass = function(g, cd) {
        var intr = Typr._lctf.getInterval(cd, g);
        return intr == -1 ? 0 : cd[intr + 2];
    };
    Typr.U.getPairAdjustment = function(font, g1, g2) {
        var hasGPOSkern = false;
        if (font.GPOS) {
            var gpos = font["GPOS"];
            var llist = gpos.lookupList, flist = gpos.featureList;
            var tused = [];
            for (var i = 0; i < flist.length; i++) {
                var fl = flist[i];
                if (fl.tag != "kern")
                    continue;
                hasGPOSkern = true;
                for (var ti = 0; ti < fl.tab.length; ti++) {
                    if (tused[fl.tab[ti]])
                        continue;
                    tused[fl.tab[ti]] = true;
                    var tab = llist[fl.tab[ti]];
                    for (var j = 0; j < tab.tabs.length; j++) {
                        if (tab.tabs[j] == null)
                            continue;
                        var ltab = tab.tabs[j], ind;
                        if (ltab.coverage) {
                            ind = Typr._lctf.coverageIndex(ltab.coverage, g1);
                            if (ind == -1)
                                continue;
                        }
                        if (tab.ltype == 1)
                            ;
                        else if (tab.ltype == 2) {
                            var adj = null;
                            if (ltab.fmt == 1) {
                                var right = ltab.pairsets[ind];
                                for (var i = 0; i < right.length; i++) {
                                    if (right[i].gid2 == g2)
                                        adj = right[i];
                                }
                            } else if (ltab.fmt == 2) {
                                var c1 = Typr.U._getGlyphClass(g1, ltab.classDef1);
                                var c2 = Typr.U._getGlyphClass(g2, ltab.classDef2);
                                adj = ltab.matrix[c1][c2];
                            }
                            if (adj) {
                                var offset = 0;
                                if (adj.val1 && adj.val1[2])
                                    offset += adj.val1[2];
                                if (adj.val2 && adj.val2[0])
                                    offset += adj.val2[0];
                                return offset;
                            }
                        }
                    }
                }
            }
        }
        if (font.kern && !hasGPOSkern) {
            var ind1 = font.kern.glyph1.indexOf(g1);
            if (ind1 != -1) {
                var ind2 = font.kern.rval[ind1].glyph2.indexOf(g2);
                if (ind2 != -1)
                    return font.kern.rval[ind1].vals[ind2];
            }
        }
        return 0;
    };
    Typr.U.stringToGlyphs = function(font, str) {
        var gls = [];
        for (var i = 0; i < str.length; i++) {
            var cc = str.codePointAt(i);
            if (cc > 65535)
                i++;
            gls.push(Typr.U.codeToGlyph(font, cc));
        }
        for (var i = 0; i < str.length; i++) {
            var cc = str.codePointAt(i);
            if (cc == 2367) {
                var t = gls[i - 1];
                gls[i - 1] = gls[i];
                gls[i] = t;
            }
            if (cc > 65535)
                i++;
        }
        var gsub = font["GSUB"];
        if (gsub == null)
            return gls;
        var llist = gsub.lookupList, flist = gsub.featureList;
        var cligs = [
            "rlig",
            "liga",
            "mset",
            "isol",
            "init",
            "fina",
            "medi",
            "half",
            "pres",
            "blws"
            /* Tibetan fonts like Himalaya.ttf */
        ];
        var tused = [];
        for (var fi = 0; fi < flist.length; fi++) {
            var fl = flist[fi];
            if (cligs.indexOf(fl.tag) == -1)
                continue;
            for (var ti = 0; ti < fl.tab.length; ti++) {
                if (tused[fl.tab[ti]])
                    continue;
                tused[fl.tab[ti]] = true;
                var tab = llist[fl.tab[ti]];
                for (var ci = 0; ci < gls.length; ci++) {
                    var feat = Typr.U._getWPfeature(str, ci);
                    if ("isol,init,fina,medi".indexOf(fl.tag) != -1 && fl.tag != feat)
                        continue;
                    Typr.U._applySubs(gls, ci, tab, llist);
                }
            }
        }
        return gls;
    };
    Typr.U._getWPfeature = function(str, ci) {
        var wsep = '\n	" ,.:;!?()  ،';
        var R = "آأؤإاةدذرزوٱٲٳٵٶٷڈډڊڋڌڍڎڏڐڑڒړڔڕږڗژڙۀۃۄۅۆۇۈۉۊۋۍۏےۓەۮۯܐܕܖܗܘܙܞܨܪܬܯݍݙݚݛݫݬݱݳݴݸݹࡀࡆࡇࡉࡔࡧࡩࡪࢪࢫࢬࢮࢱࢲࢹૅેૉ૊૎૏ૐ૑૒૝ૡ૤૯஁ஃ஄அஉ஌எஏ஑னப஫஬";
        var L = "ꡲ્૗";
        var slft = ci == 0 || wsep.indexOf(str[ci - 1]) != -1;
        var srgt = ci == str.length - 1 || wsep.indexOf(str[ci + 1]) != -1;
        if (!slft && R.indexOf(str[ci - 1]) != -1)
            slft = true;
        if (!srgt && R.indexOf(str[ci]) != -1)
            srgt = true;
        if (!srgt && L.indexOf(str[ci + 1]) != -1)
            srgt = true;
        if (!slft && L.indexOf(str[ci]) != -1)
            slft = true;
        var feat = null;
        if (slft) {
            feat = srgt ? "isol" : "init";
        } else {
            feat = srgt ? "fina" : "medi";
        }
        return feat;
    };
    Typr.U._applySubs = function(gls, ci, tab, llist) {
        var rlim = gls.length - ci - 1;
        for (var j = 0; j < tab.tabs.length; j++) {
            if (tab.tabs[j] == null)
                continue;
            var ltab = tab.tabs[j], ind;
            if (ltab.coverage) {
                ind = Typr._lctf.coverageIndex(ltab.coverage, gls[ci]);
                if (ind == -1)
                    continue;
            }
            if (tab.ltype == 1) {
                gls[ci];
                if (ltab.fmt == 1)
                    gls[ci] = gls[ci] + ltab.delta;
                else
                    gls[ci] = ltab.newg[ind];
            } else if (tab.ltype == 4) {
                var vals = ltab.vals[ind];
                for (var k = 0; k < vals.length; k++) {
                    var lig = vals[k], rl = lig.chain.length;
                    if (rl > rlim)
                        continue;
                    var good = true, em1 = 0;
                    for (var l = 0; l < rl; l++) {
                        while (gls[ci + em1 + (1 + l)] == -1)
                            em1++;
                        if (lig.chain[l] != gls[ci + em1 + (1 + l)])
                            good = false;
                    }
                    if (!good)
                        continue;
                    gls[ci] = lig.nglyph;
                    for (var l = 0; l < rl + em1; l++)
                        gls[ci + l + 1] = -1;
                    break;
                }
            } else if (tab.ltype == 5 && ltab.fmt == 2) {
                var cind = Typr._lctf.getInterval(ltab.cDef, gls[ci]);
                var cls = ltab.cDef[cind + 2], scs = ltab.scset[cls];
                for (var i = 0; i < scs.length; i++) {
                    var sc = scs[i], inp = sc.input;
                    if (inp.length > rlim)
                        continue;
                    var good = true;
                    for (var l = 0; l < inp.length; l++) {
                        var cind2 = Typr._lctf.getInterval(ltab.cDef, gls[ci + 1 + l]);
                        if (cind == -1 && ltab.cDef[cind2 + 2] != inp[l]) {
                            good = false;
                            break;
                        }
                    }
                    if (!good)
                        continue;
                    var lrs = sc.substLookupRecords;
                    for (var k = 0; k < lrs.length; k += 2) {
                        lrs[k];
                        lrs[k + 1];
                    }
                }
            } else if (tab.ltype == 6 && ltab.fmt == 3) {
                if (!Typr.U._glsCovered(gls, ltab.backCvg, ci - ltab.backCvg.length))
                    continue;
                if (!Typr.U._glsCovered(gls, ltab.inptCvg, ci))
                    continue;
                if (!Typr.U._glsCovered(gls, ltab.ahedCvg, ci + ltab.inptCvg.length))
                    continue;
                var lr = ltab.lookupRec;
                for (var i = 0; i < lr.length; i += 2) {
                    var cind = lr[i], tab2 = llist[lr[i + 1]];
                    Typr.U._applySubs(gls, ci + cind, tab2, llist);
                }
            }
        }
    };
    Typr.U._glsCovered = function(gls, cvgs, ci) {
        for (var i = 0; i < cvgs.length; i++) {
            var ind = Typr._lctf.coverageIndex(cvgs[i], gls[ci + i]);
            if (ind == -1)
                return false;
        }
        return true;
    };
    Typr.U.glyphsToPath = function(font, gls, clr) {
        var tpath = { cmds: [], crds: [] };
        var x = 0;
        for (var i = 0; i < gls.length; i++) {
            var gid = gls[i];
            if (gid == -1)
                continue;
            var gid2 = i < gls.length - 1 && gls[i + 1] != -1 ? gls[i + 1] : 0;
            var path = Typr.U.glyphToPath(font, gid);
            for (var j = 0; j < path.crds.length; j += 2) {
                tpath.crds.push(path.crds[j] + x);
                tpath.crds.push(path.crds[j + 1]);
            }
            if (clr)
                tpath.cmds.push(clr);
            for (var j = 0; j < path.cmds.length; j++)
                tpath.cmds.push(path.cmds[j]);
            if (clr)
                tpath.cmds.push("X");
            x += font.hmtx.aWidth[gid];
            if (i < gls.length - 1)
                x += Typr.U.getPairAdjustment(font, gid, gid2);
        }
        return tpath;
    };
    Typr.U.pathToSVG = function(path, prec) {
        if (prec == null)
            prec = 5;
        var out = [], co = 0, lmap = { "M": 2, "L": 2, "Q": 4, "C": 6 };
        for (var i = 0; i < path.cmds.length; i++) {
            var cmd = path.cmds[i], cn = co + (lmap[cmd] ? lmap[cmd] : 0);
            out.push(cmd);
            while (co < cn) {
                var c = path.crds[co++];
                out.push(parseFloat(c.toFixed(prec)) + (co == cn ? "" : " "));
            }
        }
        return out.join("");
    };
    Typr.U.pathToContext = function(path, ctx) {
        var c = 0, crds = path.crds;
        for (var j = 0; j < path.cmds.length; j++) {
            var cmd = path.cmds[j];
            if (cmd == "M") {
                ctx.moveTo(crds[c], crds[c + 1]);
                c += 2;
            } else if (cmd == "L") {
                ctx.lineTo(crds[c], crds[c + 1]);
                c += 2;
            } else if (cmd == "C") {
                ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]);
                c += 6;
            } else if (cmd == "Q") {
                ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]);
                c += 4;
            } else if (cmd.charAt(0) == "#") {
                ctx.beginPath();
                ctx.fillStyle = cmd;
            } else if (cmd == "Z") {
                ctx.closePath();
            } else if (cmd == "X") {
                ctx.fill();
            }
        }
    };
    Typr.U.P = {};
    Typr.U.P.moveTo = function(p, x, y) {
        p.cmds.push("M");
        p.crds.push(x, y);
    };
    Typr.U.P.lineTo = function(p, x, y) {
        p.cmds.push("L");
        p.crds.push(x, y);
    };
    Typr.U.P.curveTo = function(p, a, b, c, d, e, f) {
        p.cmds.push("C");
        p.crds.push(a, b, c, d, e, f);
    };
    Typr.U.P.qcurveTo = function(p, a, b, c, d) {
        p.cmds.push("Q");
        p.crds.push(a, b, c, d);
    };
    Typr.U.P.closePath = function(p) {
        p.cmds.push("Z");
    };
    Typr.U._drawCFF = function(cmds, state, font, pdct, p) {
        var stack = state.stack;
        var nStems = state.nStems, haveWidth = state.haveWidth, width = state.width, open = state.open;
        var i = 0;
        var x = state.x, y = state.y, c1x = 0, c1y = 0, c2x = 0, c2y = 0, c3x = 0, c3y = 0, c4x = 0, c4y = 0, jpx = 0, jpy = 0;
        var o = { val: 0, size: 0 };
        while (i < cmds.length) {
            Typr.CFF.getCharString(cmds, i, o);
            var v = o.val;
            i += o.size;
            if (v == "o1" || v == "o18") {
                var hasWidthArg;
                hasWidthArg = stack.length % 2 !== 0;
                if (hasWidthArg && !haveWidth) {
                    width = stack.shift() + pdct.nominalWidthX;
                }
                nStems += stack.length >> 1;
                stack.length = 0;
                haveWidth = true;
            } else if (v == "o3" || v == "o23") {
                var hasWidthArg;
                hasWidthArg = stack.length % 2 !== 0;
                if (hasWidthArg && !haveWidth) {
                    width = stack.shift() + pdct.nominalWidthX;
                }
                nStems += stack.length >> 1;
                stack.length = 0;
                haveWidth = true;
            } else if (v == "o4") {
                if (stack.length > 1 && !haveWidth) {
                    width = stack.shift() + pdct.nominalWidthX;
                    haveWidth = true;
                }
                if (open)
                    Typr.U.P.closePath(p);
                y += stack.pop();
                Typr.U.P.moveTo(p, x, y);
                open = true;
            } else if (v == "o5") {
                while (stack.length > 0) {
                    x += stack.shift();
                    y += stack.shift();
                    Typr.U.P.lineTo(p, x, y);
                }
            } else if (v == "o6" || v == "o7") {
                var count = stack.length;
                var isX = v == "o6";
                for (var j = 0; j < count; j++) {
                    var sval = stack.shift();
                    if (isX) {
                        x += sval;
                    } else {
                        y += sval;
                    }
                    isX = !isX;
                    Typr.U.P.lineTo(p, x, y);
                }
            } else if (v == "o8" || v == "o24") {
                var count = stack.length;
                var index = 0;
                while (index + 6 <= count) {
                    c1x = x + stack.shift();
                    c1y = y + stack.shift();
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    x = c2x + stack.shift();
                    y = c2y + stack.shift();
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
                    index += 6;
                }
                if (v == "o24") {
                    x += stack.shift();
                    y += stack.shift();
                    Typr.U.P.lineTo(p, x, y);
                }
            } else if (v == "o11") {
                break;
            } else if (v == "o1234" || v == "o1235" || v == "o1236" || v == "o1237") {
                if (v == "o1234") {
                    c1x = x + stack.shift();
                    c1y = y;
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    jpx = c2x + stack.shift();
                    jpy = c2y;
                    c3x = jpx + stack.shift();
                    c3y = c2y;
                    c4x = c3x + stack.shift();
                    c4y = y;
                    x = c4x + stack.shift();
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
                    Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
                }
                if (v == "o1235") {
                    c1x = x + stack.shift();
                    c1y = y + stack.shift();
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    jpx = c2x + stack.shift();
                    jpy = c2y + stack.shift();
                    c3x = jpx + stack.shift();
                    c3y = jpy + stack.shift();
                    c4x = c3x + stack.shift();
                    c4y = c3y + stack.shift();
                    x = c4x + stack.shift();
                    y = c4y + stack.shift();
                    stack.shift();
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
                    Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
                }
                if (v == "o1236") {
                    c1x = x + stack.shift();
                    c1y = y + stack.shift();
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    jpx = c2x + stack.shift();
                    jpy = c2y;
                    c3x = jpx + stack.shift();
                    c3y = c2y;
                    c4x = c3x + stack.shift();
                    c4y = c3y + stack.shift();
                    x = c4x + stack.shift();
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
                    Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
                }
                if (v == "o1237") {
                    c1x = x + stack.shift();
                    c1y = y + stack.shift();
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    jpx = c2x + stack.shift();
                    jpy = c2y + stack.shift();
                    c3x = jpx + stack.shift();
                    c3y = jpy + stack.shift();
                    c4x = c3x + stack.shift();
                    c4y = c3y + stack.shift();
                    if (Math.abs(c4x - x) > Math.abs(c4y - y)) {
                        x = c4x + stack.shift();
                    } else {
                        y = c4y + stack.shift();
                    }
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
                    Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
                }
            } else if (v == "o14") {
                if (stack.length > 0 && !haveWidth) {
                    width = stack.shift() + font.nominalWidthX;
                    haveWidth = true;
                }
                if (stack.length == 4) {
                    var adx = stack.shift();
                    var ady = stack.shift();
                    var bchar = stack.shift();
                    var achar = stack.shift();
                    var bind2 = Typr.CFF.glyphBySE(font, bchar);
                    var aind = Typr.CFF.glyphBySE(font, achar);
                    Typr.U._drawCFF(font.CharStrings[bind2], state, font, pdct, p);
                    state.x = adx;
                    state.y = ady;
                    Typr.U._drawCFF(font.CharStrings[aind], state, font, pdct, p);
                }
                if (open) {
                    Typr.U.P.closePath(p);
                    open = false;
                }
            } else if (v == "o19" || v == "o20") {
                var hasWidthArg;
                hasWidthArg = stack.length % 2 !== 0;
                if (hasWidthArg && !haveWidth) {
                    width = stack.shift() + pdct.nominalWidthX;
                }
                nStems += stack.length >> 1;
                stack.length = 0;
                haveWidth = true;
                i += nStems + 7 >> 3;
            } else if (v == "o21") {
                if (stack.length > 2 && !haveWidth) {
                    width = stack.shift() + pdct.nominalWidthX;
                    haveWidth = true;
                }
                y += stack.pop();
                x += stack.pop();
                if (open)
                    Typr.U.P.closePath(p);
                Typr.U.P.moveTo(p, x, y);
                open = true;
            } else if (v == "o22") {
                if (stack.length > 1 && !haveWidth) {
                    width = stack.shift() + pdct.nominalWidthX;
                    haveWidth = true;
                }
                x += stack.pop();
                if (open)
                    Typr.U.P.closePath(p);
                Typr.U.P.moveTo(p, x, y);
                open = true;
            } else if (v == "o25") {
                while (stack.length > 6) {
                    x += stack.shift();
                    y += stack.shift();
                    Typr.U.P.lineTo(p, x, y);
                }
                c1x = x + stack.shift();
                c1y = y + stack.shift();
                c2x = c1x + stack.shift();
                c2y = c1y + stack.shift();
                x = c2x + stack.shift();
                y = c2y + stack.shift();
                Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
            } else if (v == "o26") {
                if (stack.length % 2) {
                    x += stack.shift();
                }
                while (stack.length > 0) {
                    c1x = x;
                    c1y = y + stack.shift();
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    x = c2x;
                    y = c2y + stack.shift();
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
                }
            } else if (v == "o27") {
                if (stack.length % 2) {
                    y += stack.shift();
                }
                while (stack.length > 0) {
                    c1x = x + stack.shift();
                    c1y = y;
                    c2x = c1x + stack.shift();
                    c2y = c1y + stack.shift();
                    x = c2x + stack.shift();
                    y = c2y;
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
                }
            } else if (v == "o10" || v == "o29") {
                var obj = v == "o10" ? pdct : font;
                if (stack.length == 0) {
                    console.warn("error: empty stack");
                } else {
                    var ind = stack.pop();
                    var subr = obj.Subrs[ind + obj.Bias];
                    state.x = x;
                    state.y = y;
                    state.nStems = nStems;
                    state.haveWidth = haveWidth;
                    state.width = width;
                    state.open = open;
                    Typr.U._drawCFF(subr, state, font, pdct, p);
                    x = state.x;
                    y = state.y;
                    nStems = state.nStems;
                    haveWidth = state.haveWidth;
                    width = state.width;
                    open = state.open;
                }
            } else if (v == "o30" || v == "o31") {
                var count, count1 = stack.length;
                var index = 0;
                var alternate = v == "o31";
                count = count1 & ~2;
                index += count1 - count;
                while (index < count) {
                    if (alternate) {
                        c1x = x + stack.shift();
                        c1y = y;
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        y = c2y + stack.shift();
                        if (count - index == 5) {
                            x = c2x + stack.shift();
                            index++;
                        } else {
                            x = c2x;
                        }
                        alternate = false;
                    } else {
                        c1x = x;
                        c1y = y + stack.shift();
                        c2x = c1x + stack.shift();
                        c2y = c1y + stack.shift();
                        x = c2x + stack.shift();
                        if (count - index == 5) {
                            y = c2y + stack.shift();
                            index++;
                        } else {
                            y = c2y;
                        }
                        alternate = true;
                    }
                    Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
                    index += 4;
                }
            } else if ((v + "").charAt(0) == "o") {
                console.warn("Unknown operation: " + v, cmds);
                throw v;
            } else
                stack.push(v);
        }
        state.x = x;
        state.y = y;
        state.nStems = nStems;
        state.haveWidth = haveWidth;
        state.width = width;
        state.open = open;
    };
    Typr$1.Typr = Typr;
    var Font_1 = void 0;
    var Typr_js_1 = Typr$1;
    var friendlyTags = { "aalt": "Access All Alternates", "abvf": "Above-base Forms", "abvm": "Above - base Mark Positioning", "abvs": "Above - base Substitutions", "afrc": "Alternative Fractions", "akhn": "Akhands", "blwf": "Below - base Forms", "blwm": "Below - base Mark Positioning", "blws": "Below - base Substitutions", "calt": "Contextual Alternates", "case": "Case - Sensitive Forms", "ccmp": "Glyph Composition / Decomposition", "cfar": "Conjunct Form After Ro", "cjct": "Conjunct Forms", "clig": "Contextual Ligatures", "cpct": "Centered CJK Punctuation", "cpsp": "Capital Spacing", "cswh": "Contextual Swash", "curs": "Cursive Positioning", "c2pc": "Petite Capitals From Capitals", "c2sc": "Small Capitals From Capitals", "dist": "Distances", "dlig": "Discretionary Ligatures", "dnom": "Denominators", "dtls": "Dotless Forms", "expt": "Expert Forms", "falt": "Final Glyph on Line Alternates", "fin2": "Terminal Forms #2", "fin3": "Terminal Forms #3", "fina": "Terminal Forms", "flac": "Flattened accent forms", "frac": "Fractions", "fwid": "Full Widths", "half": "Half Forms", "haln": "Halant Forms", "halt": "Alternate Half Widths", "hist": "Historical Forms", "hkna": "Horizontal Kana Alternates", "hlig": "Historical Ligatures", "hngl": "Hangul", "hojo": "Hojo Kanji Forms(JIS X 0212 - 1990 Kanji Forms)", "hwid": "Half Widths", "init": "Initial Forms", "isol": "Isolated Forms", "ital": "Italics", "jalt": "Justification Alternates", "jp78": "JIS78 Forms", "jp83": "JIS83 Forms", "jp90": "JIS90 Forms", "jp04": "JIS2004 Forms", "kern": "Kerning", "lfbd": "Left Bounds", "liga": "Standard Ligatures", "ljmo": "Leading Jamo Forms", "lnum": "Lining Figures", "locl": "Localized Forms", "ltra": "Left - to - right alternates", "ltrm": "Left - to - right mirrored forms", "mark": "Mark Positioning", "med2": "Medial Forms #2", "medi": "Medial Forms", "mgrk": "Mathematical Greek", "mkmk": "Mark to Mark Positioning", "mset": "Mark Positioning via Substitution", "nalt": "Alternate Annotation Forms", "nlck": "NLC Kanji Forms", "nukt": "Nukta Forms", "numr": "Numerators", "onum": "Oldstyle Figures", "opbd": "Optical Bounds", "ordn": "Ordinals", "ornm": "Ornaments", "palt": "Proportional Alternate Widths", "pcap": "Petite Capitals", "pkna": "Proportional Kana", "pnum": "Proportional Figures", "pref": "Pre - Base Forms", "pres": "Pre - base Substitutions", "pstf": "Post - base Forms", "psts": "Post - base Substitutions", "pwid": "Proportional Widths", "qwid": "Quarter Widths", "rand": "Randomize", "rclt": "Required Contextual Alternates", "rkrf": "Rakar Forms", "rlig": "Required Ligatures", "rphf": "Reph Forms", "rtbd": "Right Bounds", "rtla": "Right - to - left alternates", "rtlm": "Right - to - left mirrored forms", "ruby": "Ruby Notation Forms", "rvrn": "Required Variation Alternates", "salt": "Stylistic Alternates", "sinf": "Scientific Inferiors", "size": "Optical size", "smcp": "Small Capitals", "smpl": "Simplified Forms", "ssty": "Math script style alternates", "stch": "Stretching Glyph Decomposition", "subs": "Subscript", "sups": "Superscript", "swsh": "Swash", "titl": "Titling", "tjmo": "Trailing Jamo Forms", "tnam": "Traditional Name Forms", "tnum": "Tabular Figures", "trad": "Traditional Forms", "twid": "Third Widths", "unic": "Unicase", "valt": "Alternate Vertical Metrics", "vatu": "Vattu Variants", "vert": "Vertical Writing", "vhal": "Alternate Vertical Half Metrics", "vjmo": "Vowel Jamo Forms", "vkna": "Vertical Kana Alternates", "vkrn": "Vertical Kerning", "vpal": "Proportional Alternate Vertical Metrics", "vrt2": "Vertical Alternates and Rotation", "vrtr": "Vertical Alternates for Rotation", "zero": "Slashed Zero" };
    var Font = (
        /** @class */
        function() {
            function Font2(data) {
                var obj = Typr_js_1.Typr.parse(data);
                if (!obj.length || typeof obj[0] !== "object" || typeof obj[0].hasOwnProperty !== "function") {
                    throw "unable to parse font";
                }
                for (var n in obj[0]) {
                    this[n] = obj[0][n];
                }
                this.enabledGSUB = {};
            }
            Font2.prototype.getFamilyName = function() {
                return this.name && (this.name.typoFamilyName || this.name.fontFamily) || "";
            };
            Font2.prototype.getSubFamilyName = function() {
                return this.name && (this.name.typoSubfamilyName || this.name.fontSubfamily) || "";
            };
            Font2.prototype.glyphToPath = function(gid) {
                return Typr_js_1.Typr.U.glyphToPath(this, gid);
            };
            Font2.prototype.getPairAdjustment = function(gid1, gid2) {
                return Typr_js_1.Typr.U.getPairAdjustment(this, gid1, gid2);
            };
            Font2.prototype.stringToGlyphs = function(str) {
                return Typr_js_1.Typr.U.stringToGlyphs(this, str);
            };
            Font2.prototype.glyphsToPath = function(gls) {
                return Typr_js_1.Typr.U.glyphsToPath(this, gls);
            };
            Font2.prototype.pathToSVG = function(path, prec) {
                return Typr_js_1.Typr.U.pathToSVG(path, prec);
            };
            Font2.prototype.pathToContext = function(path, ctx) {
                return Typr_js_1.Typr.U.pathToContext(path, ctx);
            };
            Font2.prototype.lookupFriendlyName = function(table, feature) {
                if (this[table] !== void 0) {
                    var tbl = this[table];
                    var feat = tbl.featureList[feature];
                    return this.featureFriendlyName(feat);
                }
                return "";
            };
            Font2.prototype.featureFriendlyName = function(feature) {
                if (friendlyTags[feature.tag]) {
                    return friendlyTags[feature.tag];
                }
                if (feature.tag.match(/ss[0-2][0-9]/)) {
                    var name_1 = "Stylistic Set " + Number(feature.tag.substr(2, 2)).toString();
                    if (feature.featureParams) {
                        var version = Typr_js_1.Typr._bin.readUshort(this._data, feature.featureParams);
                        if (version === 0) {
                            var nameID = Typr_js_1.Typr._bin.readUshort(this._data, feature.featureParams + 2);
                            if (this.name && this.name[nameID] !== void 0) {
                                return name_1 + " - " + this.name[nameID];
                            }
                        }
                    }
                    return name_1;
                }
                if (feature.tag.match(/cv[0-9][0-9]/)) {
                    return "Character Variant " + Number(feature.tag.substr(2, 2)).toString();
                }
                return "";
            };
            Font2.prototype.enableGSUB = function(featureNumber) {
                if (this.GSUB) {
                    var feature = this.GSUB.featureList[featureNumber];
                    if (feature) {
                        for (var i = 0; i < feature.tab.length; ++i) {
                            this.enabledGSUB[feature.tab[i]] = (this.enabledGSUB[feature.tab[i]] || 0) + 1;
                        }
                    }
                }
            };
            Font2.prototype.disableGSUB = function(featureNumber) {
                if (this.GSUB) {
                    var feature = this.GSUB.featureList[featureNumber];
                    if (feature) {
                        for (var i = 0; i < feature.tab.length; ++i) {
                            if (this.enabledGSUB[feature.tab[i]] > 1) {
                                --this.enabledGSUB[feature.tab[i]];
                            } else {
                                delete this.enabledGSUB[feature.tab[i]];
                            }
                        }
                    }
                }
            };
            Font2.prototype.codeToGlyph = function(code) {
                var g = Typr_js_1.Typr.U.codeToGlyph(this, code);
                if (this.GSUB) {
                    var gls = [g];
                    for (var n in this.enabledGSUB) {
                        var l = this.GSUB.lookupList[n];
                        Typr_js_1.Typr.U._applySubs(gls, 0, l, this.GSUB.lookupList);
                    }
                    if (gls.length === 1)
                        return gls[0];
                }
                return g;
            };
            return Font2;
        }()
    );
    Font_1 = Font;
    function decrypt(iframeDocument) {
        var _a, _b, _c;
        const styles = iframeDocument.querySelectorAll("style");
        let tip;
        for (let i = 0; i < styles.length; i++) {
            if ((_a = styles[i].textContent) == null ? void 0 : _a.includes("font-cxsecret")) {
                tip = styles[i];
                break;
            }
        }
        if (!tip)
            return;
        const fontData = (_c = (_b = tip.textContent) == null ? void 0 : _b.match(/base64,([\w\W]+?)'/)) == null ? void 0 : _c[1];
        if (!fontData)
            return;
        const fontArray = base64ToUint8Array(fontData);
        const font = new Font_1(fontArray);
        const table = JSON.parse(GM_getResourceText("ttf"));
        const match = {};
        for (let i = 19968; i < 40870; i++) {
            const glyph = font.codeToGlyph(i);
            if (!glyph)
                continue;
            const path = font.glyphToPath(glyph);
            const hash = md5(JSON.stringify(path)).slice(24);
            match[i] = table[hash];
        }
        const elements = iframeDocument.querySelectorAll(".font-cxsecret");
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            let html = el.innerHTML;
            for (const key in match) {
                const value = String.fromCharCode(match[key]);
                const regExp = new RegExp(String.fromCharCode(Number(key)), "g");
                html = html.replace(regExp, value);
            }
            el.innerHTML = html;
            el.classList.remove("font-cxsecret");
        }
        function base64ToUint8Array(base64) {
            const data = window.atob(base64);
            const buffer = new Uint8Array(data.length);
            for (let i = 0; i < data.length; ++i) {
                buffer[i] = data.charCodeAt(i);
            }
            return buffer;
        }
    }
    const sleep = (second) => {
        return new Promise((resolve) => setTimeout(resolve, second * 1e3));
    };
    class BaseQuestionHandler {
        constructor() {
            __publicField(this, "_document", document);
            __publicField(this, "_window", unsafeWindow);
            __publicField(this, "addLog");
            __publicField(this, "addQuestion");
            __publicField(this, "questions", []);
            __publicField(this, "correctNum", 0);
            __publicField(this, "parseHtml", () => {
                throw new Error("请使用继承类的重写方法");
            });
            __publicField(this, "fillQuestion", (question) => {
                throw new Error("请使用继承类的重写方法");
            });
            __publicField(this, "questionType", {
                "单选题": "0",
                "A1型题": "0",
                "多选题": "1",
                "X型题": "1",
                "填空题": "2",
                "判断题": "3",
                "简答题": "4",
                "名词解释": "5",
                "论述题": "6",
                "计算题": "7"
            });
            __publicField(this, "removeHtml", (html) => {
                if (html == null) {
                    return "";
                }
                return html.replace(/<((?!img|sub|sup|br)[^>]+)>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").replace(/<br\s*\/?>/g, "\n").replace(/<img.*?src="(.*?)".*?>/g, '<img src="$1"/>').trim();
            });
            __publicField(this, "clean", (str) => {
                return str.replace(/^【.*?】\s*/, "").replace(/\s*（\d+\.\d+分）$/, "");
            });
            const logStore = useLogStore();
            const questionStore = useQuestionStore();
            this.addLog = logStore.addLog;
            this.addQuestion = questionStore.addQuestion;
        }
    }
    const handleError = (msg) => ({
        code: 10003,
        data: {
            answer: [],
            num: "",
            usenum: ""
        },
        msg
    });
    const apis = [
        "http://api.tikuhai.com/search"
        // "http://62.234.36.191" + '/search',
        // Add more URLs as needed
    ];

    // AI模型答题功能（带重试机制）
    const getAnswerFromAI = async (question, retryCount = 0) => {
        const configStore = useConfigStore();
        const aiConfig = configStore.aiModelConfig;

        if (!aiConfig.enabled || !aiConfig.apiKey || !aiConfig.apiUrl) {
            return handleError("AI模型未配置或未启用");
        }

        try {
            // 构建提问内容
            let prompt = `题目类型: ${getQuestionTypeName(question.type)}\n`;
            prompt += `题目: ${question.title}\n`;

            if (question.optionsText && question.optionsText.length > 0) {
                prompt += `选项:\n`;
                question.optionsText.forEach((opt, idx) => {
                    const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D...
                    prompt += `${optionLetter}. ${opt}\n`;
                });
            }

            prompt += `\n请直接给出答案，不需要解释。`;

            const result = await makeAIRequest(prompt, aiConfig.systemPrompt);

            if (result.success) {
                // 将AI答案转换为标准格式，传递question对象以获取选项文本
                const formattedAnswer = parseAIAnswer(result.content, question.type, question);

                return {
                    code: 200,
                    data: {
                        answer: formattedAnswer,
                        num: "AI",
                        usenum: "AI模型"
                    },
                    msg: "AI模型回答成功"
                };
            } else {
                // 如果失败且还有重试次数，进行重试
                if (retryCount < 1) {
                    console.log(`AI请求失败，正在重试...（第${retryCount + 1}次）`);
                    await new Promise(resolve => setTimeout(resolve, 2000)); // 等待2秒后重试
                    return getAnswerFromAI(question, retryCount + 1);
                }
                return handleError(result.error || "AI请求失败");
            }
        } catch (error) {
            console.error("AI答题错误:", error);
            if (retryCount < 1) {
                console.log(`AI请求出错，正在重试...（第${retryCount + 1}次）`);
                await new Promise(resolve => setTimeout(resolve, 2000));
                return getAnswerFromAI(question, retryCount + 1);
            }
            return handleError("AI处理失败");
        }
    };

    // 流式AI请求函数（供聊天使用）
    const makeStreamAIRequest = async (userMessage, systemMessage = null, onPartialResponse = null) => {
        const configStore = useConfigStore();
        const aiConfig = configStore.aiModelConfig;

        if (!aiConfig.apiKey || !aiConfig.apiUrl) {
            return { success: false, error: "AI模型未配置" };
        }

        // 构建请求
        let requestBody = {};
        let headers = {
            "Content-Type": "application/json"
        };

        // 使用传入的系统消息或配置中的默认系统提示
        const sysPrompt = systemMessage || aiConfig.systemPrompt;

        // 根据请求格式构建请求体（添加流式支持）
        if (aiConfig.requestFormat === "openai") {
            // OpenAI兼容格式（适用于OpenAI、智谱、通义千问等多数模型）
            headers["Authorization"] = `Bearer ${aiConfig.apiKey}`;
            requestBody = {
                model: aiConfig.model,
                messages: [
                    { role: "system", content: sysPrompt },
                    { role: "user", content: userMessage }
                ],
                temperature: aiConfig.temperature || 0.3,
                stream: true // 启用流式输出
            };
            // 只在设置了maxTokens时才添加max_tokens字段
            if (aiConfig.maxTokens != null) {
                requestBody.max_tokens = aiConfig.maxTokens;
            }
        } else {
            // 自定义格式，用户需要根据自己的API调整
            headers["Authorization"] = aiConfig.apiKey;
            requestBody = {
                model: aiConfig.model,
                prompt: userMessage,
                system: sysPrompt,
                temperature: aiConfig.temperature || 0.3,
                stream: true // 启用流式输出
            };
            // 只在设置了maxTokens时才添加max_tokens字段
            if (aiConfig.maxTokens != null) {
                requestBody.max_tokens = aiConfig.maxTokens;
            }
        }

        return new Promise((resolve) => {
            const timeoutSeconds = Math.round((aiConfig.timeout || 30000) / 1000);
            console.log("AI流式请求开始:", {
                url: aiConfig.apiUrl,
                model: aiConfig.model,
                requestFormat: aiConfig.requestFormat,
                timeout: `${timeoutSeconds}秒`
            });

            let fullResponse = "";
            let lastProgress = 0;

            GM_xmlhttpRequest({
                url: aiConfig.apiUrl,
                method: "POST",
                headers: headers,
                data: JSON.stringify(requestBody),
                timeout: aiConfig.timeout || 30000,
                // GM_xmlhttpRequest不支持responseType: "stream"，我们使用onreadystatechange来模拟流式处理
                onreadystatechange: (response) => {
                    if (response.readyState === 3 || response.readyState === 4) { // LOADING 或 DONE 状态
                        try {
                            // 获取新的响应数据
                            const currentResponse = response.responseText || "";
                            if (currentResponse.length > lastProgress) {
                                const newData = currentResponse.substring(lastProgress);
                                lastProgress = currentResponse.length;

                                // 解析SSE数据
                                const lines = newData.split('\n');
                                for (const line of lines) {
                                    if (line.trim() === '' || !line.startsWith('data: ')) continue;
                                    if (line.includes('data: [DONE]')) continue;

                                    const jsonStr = line.substring(6); // 移除 "data: " 前缀
                                    if (jsonStr.trim() === '') continue;

                                    try {
                                        const chunk = JSON.parse(jsonStr);
                                        let deltaContent = "";

                                        if (aiConfig.requestFormat === "openai") {
                                            // OpenAI格式
                                            if (chunk.choices && chunk.choices[0] && chunk.choices[0].delta) {
                                                deltaContent = chunk.choices[0].delta.content || "";
                                            }
                                        } else {
                                            // 自定义格式
                                            deltaContent = chunk.delta || chunk.content || chunk.text || "";
                                        }

                                        if (deltaContent) {
                                            fullResponse += deltaContent;
                                            // 调用回调函数更新UI，添加防抖处理
                                            if (onPartialResponse) {
                                                onPartialResponse(fullResponse);
                                            }
                                        }
                                    } catch (e) {
                                        console.warn("解析流式数据失败:", e, jsonStr);
                                    }
                                }
                            }
                        } catch (e) {
                            console.error("流式响应处理错误:", e);
                        }
                    }
                },
                onload: (response) => {
                    try {
                        console.log("AI流式响应完成:", response.status);

                        if (response.status !== 200) {
                            console.error("AI流式请求失败，状态码:", response.status);
                            return resolve({ success: false, error: `AI请求失败: HTTP ${response.status}` });
                        }

                        if (!fullResponse) {
                            console.error("AI流式响应为空");
                            return resolve({ success: false, error: "AI未返回有效答案" });
                        }

                        console.log("AI流式完整答案:", fullResponse);
                        resolve({ success: true, content: fullResponse });
                    } catch (e) {
                        console.error("AI流式响应处理错误:", e);
                        resolve({ success: false, error: `AI响应处理失败: ${e.message}` });
                    }
                },
                onerror: (error) => {
                    console.error("AI流式请求错误:", error);
                    resolve({ success: false, error: "AI请求失败" });
                },
                ontimeout: () => {
                    const timeoutSeconds = Math.round((aiConfig.timeout || 30000) / 1000);
                    console.error(`AI流式请求超时（${timeoutSeconds}秒）`);
                    resolve({ success: false, error: `AI请求超时（${timeoutSeconds}秒），请检查网络或增加超时时间` });
                }
            });
        });
    };

    // 通用AI请求函数（供答题和聊天使用）
    const makeAIRequest = async (userMessage, systemMessage = null) => {
        const configStore = useConfigStore();
        const aiConfig = configStore.aiModelConfig;

        if (!aiConfig.apiKey || !aiConfig.apiUrl) {
            return { success: false, error: "AI模型未配置" };
        }

        // 构建请求
        let requestBody = {};
        let headers = {
            "Content-Type": "application/json"
        };

        // 使用传入的系统消息或配置中的默认系统提示
        const sysPrompt = systemMessage || aiConfig.systemPrompt;

        // 根据请求格式构建请求体
        if (aiConfig.requestFormat === "openai") {
            // OpenAI兼容格式（适用于OpenAI、智谱、通义千问等多数模型）
            headers["Authorization"] = `Bearer ${aiConfig.apiKey}`;
            requestBody = {
                model: aiConfig.model,
                messages: [
                    { role: "system", content: sysPrompt },
                    { role: "user", content: userMessage }
                ],
                temperature: aiConfig.temperature || 0.3
            };
            // 只在设置了maxTokens时才添加max_tokens字段
            if (aiConfig.maxTokens != null) {
                requestBody.max_tokens = aiConfig.maxTokens;
            }
        } else {
            // 自定义格式，用户需要根据自己的API调整
            headers["Authorization"] = aiConfig.apiKey;
            requestBody = {
                model: aiConfig.model,
                prompt: userMessage,
                system: sysPrompt,
                temperature: aiConfig.temperature || 0.3
            };
            // 只在设置了maxTokens时才添加max_tokens字段
            if (aiConfig.maxTokens != null) {
                requestBody.max_tokens = aiConfig.maxTokens;
            }
        }

        return new Promise((resolve) => {
            const timeoutSeconds = Math.round((aiConfig.timeout || 30000) / 1000);
            console.log("AI请求开始:", {
                url: aiConfig.apiUrl,
                model: aiConfig.model,
                requestFormat: aiConfig.requestFormat,
                timeout: `${timeoutSeconds}秒`
            });

            GM_xmlhttpRequest({
                url: aiConfig.apiUrl,
                method: "POST",
                headers: headers,
                data: JSON.stringify(requestBody),
                timeout: aiConfig.timeout || 30000, // 使用配置的超时时间
                onload: (response) => {
                    try {
                        console.log("AI响应状态:", response.status);

                        // 检查HTTP状态码
                        if (response.status !== 200) {
                            console.error("AI请求失败，状态码:", response.status, "响应:", response.responseText);
                            return resolve({ success: false, error: `AI请求失败: HTTP ${response.status}` });
                        }

                        const result = JSON.parse(response.responseText);
                        console.log("AI响应数据:", result);

                        // 解析响应
                        let answerText = "";

                        if (aiConfig.requestFormat === "openai") {
                            // OpenAI兼容格式的响应
                            if (result.choices && result.choices[0]) {
                                answerText = result.choices[0].message?.content || result.choices[0].text || "";
                            }
                            // 检查是否有错误信息
                            if (result.error) {
                                console.error("AI返回错误:", result.error);
                                return resolve({ success: false, error: `AI错误: ${result.error.message || '未知错误'}` });
                            }
                        } else {
                            // 自定义格式，尝试多种可能的响应路径
                            answerText = result.answer || result.response || result.output || result.text || result.content || "";
                        }

                        if (!answerText) {
                            console.error("AI未返回有效答案，响应数据:", result);
                            return resolve({ success: false, error: "AI未返回有效答案" });
                        }

                        console.log("AI答案:", answerText);
                        resolve({ success: true, content: answerText });
                    } catch (e) {
                        console.error("AI响应解析错误:", e, "原始响应:", response.responseText);
                        resolve({ success: false, error: `AI响应解析失败: ${e.message}` });
                    }
                },
                onerror: (error) => {
                    console.error("AI请求错误:", error);
                    resolve({ success: false, error: "AI请求失败" });
                },
                ontimeout: () => {
                    const timeoutSeconds = Math.round((aiConfig.timeout || 30000) / 1000);
                    console.error(`AI请求超时（${timeoutSeconds}秒）`);
                    resolve({ success: false, error: `AI请求超时（${timeoutSeconds}秒），请检查网络或增加超时时间` });
                }
            });
        });
    };

    // 解析AI返回的答案为标准格式
    const parseAIAnswer = (answerText, questionType, question) => {
        // 首先转换markdown为普通文本
        answerText = convertMarkdownToPlainText(answerText).trim();
        console.log("AI原始答案:", answerText);

        // 如果是填空题，需要特殊处理可能的"第X空"格式
        if (questionType === "2") {
            // 检查是否包含"第X空"这样的格式
            if (answerText.includes('第') && answerText.includes('空')) {
                // 提取每个空的答案
                const lines = answerText.split('\n');
                const extractedAnswers = [];

                // 存储每个空对应的答案
                const answersByBlank = [];
                let currentBlank = -1;

                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i].trim();

                    // 检查是否是"第X空"标记
                    if (line.includes('第') && line.includes('空')) {
                        currentBlank++;
                        continue;
                    }

                    // 如果是答案行且当前有有效的空索引
                    if (line && currentBlank >= 0 && !line.includes('：')) {
                        if (!answersByBlank[currentBlank]) {
                            answersByBlank[currentBlank] = line;
                        }
                    }
                }

                // 检查是否所有答案都相同（可能是AI误解了）
                if (answersByBlank.length > 1 && answersByBlank.every(a => a === answersByBlank[0])) {
                    const commonAnswer = answersByBlank[0];

                    // 尝试智能分割答案
                    let splitAnswers = [];

                    // 1. 优先尝试逗号分割（如"龟甲,兽骨"或"龟甲，兽骨"）
                    if (commonAnswer.includes(',') || commonAnswer.includes('，')) {
                        const commaSplit = commonAnswer.split(/[,，]/).map(a => a.trim());
                        if (commaSplit.length === answersByBlank.length) {
                            splitAnswers = commaSplit;
                            console.log("智能分割填空题答案（逗号）:", splitAnswers);
                        }
                    }

                    // 2. 尝试顿号分割（如"秦隶、汉隶"）
                    if (splitAnswers.length === 0 && commonAnswer.includes('、')) {
                        const dunhaoSplit = commonAnswer.split('、').map(a => a.trim());
                        if (dunhaoSplit.length === answersByBlank.length) {
                            splitAnswers = dunhaoSplit;
                            console.log("智能分割填空题答案（顿号）:", splitAnswers);
                        }
                    }

                    // 3. 尝试空格分割（如"商 龟甲和兽骨"）
                    if (splitAnswers.length === 0 && commonAnswer.includes(' ')) {
                        const spaceSplit = commonAnswer.split(/\s+/).map(a => a.trim()).filter(a => a);

                        // 如果分割后的数量正好等于空的数量，使用这个分割
                        if (spaceSplit.length === answersByBlank.length) {
                            splitAnswers = spaceSplit;
                            console.log("智能分割填空题答案（空格，数量匹配）:", splitAnswers);
                        }
                        // 如果分割后是两个部分，且有两个空，可能是"商 龟甲和兽骨"这种格式
                        else if (spaceSplit.length === 2 && answersByBlank.length === 2) {
                            // 第一个词可能是第一个答案，剩余的是第二个答案
                            splitAnswers = spaceSplit;
                            console.log("智能分割填空题答案（空格分两部分）:", splitAnswers);
                        }
                        // 如果有多个空格，尝试按第一个空格分割成两部分
                        else if (answersByBlank.length === 2) {
                            const firstSpaceIndex = commonAnswer.indexOf(' ');
                            if (firstSpaceIndex > 0) {
                                splitAnswers = [
                                    commonAnswer.substring(0, firstSpaceIndex).trim(),
                                    commonAnswer.substring(firstSpaceIndex + 1).trim()
                                ];
                                console.log("智能分割填空题答案（按第一个空格分割）:", splitAnswers);
                            }
                        }
                    }

                    // 4. 尝试分号分割
                    if (splitAnswers.length === 0 && (commonAnswer.includes(';') || commonAnswer.includes('；'))) {
                        const semicolonSplit = commonAnswer.split(/[;；]/).map(a => a.trim());
                        if (semicolonSplit.length === answersByBlank.length) {
                            splitAnswers = semicolonSplit;
                            console.log("智能分割填空题答案（分号）:", splitAnswers);
                        }
                    }

                    // 如果成功分割，使用分割后的答案
                    if (splitAnswers.length > 0) {
                        answerText = splitAnswers.join(',');
                    } else {
                        // 无法智能分割，使用原始答案
                        answerText = answersByBlank.join(',');
                        console.log("无法智能分割，使用原始答案:", answersByBlank);
                    }
                } else {
                    // 答案不同，正常使用各自的答案
                    answerText = answersByBlank.join(',');
                    console.log("提取的填空题答案（各不相同）:", answersByBlank);
                }
            }
        }

        let answers = [];

        if (questionType === "0" || questionType === "1") {
            // 单选题或多选题
            // 首先尝试提取答案中的选项字母（如 A, B, C, D）
            const letterMatches = answerText.match(/[A-Z]/g);

            if (letterMatches && question.optionsText) {
                // 如果找到字母，转换为对应的选项文本
                answers = letterMatches.map(letter => {
                    const index = letter.charCodeAt(0) - 65; // A=0, B=1, C=2, ...
                    if (index < question.optionsText.length) {
                        return question.optionsText[index];
                    }
                    return letter;
                });
            } else {
                // 如果没有字母或没有选项文本，尝试直接匹配答案内容
                // AI可能直接返回了选项内容
                answers = [answerText];
            }
        } else if (questionType === "3") {
            // 判断题 - 保持与原有逻辑一致的格式
            if (answerText.match(/(正确|是|对|√|T|true|True|TRUE|yes|Yes|RIGHT|Right)/)) {
                answers = ["正确"];
            } else if (answerText.match(/(错误|否|错|×|F|false|False|FALSE|no|No|WRONG|Wrong)/)) {
                answers = ["错误"];
            } else {
                answers = [answerText];
            }
        } else if (questionType === "2") {
            // 填空题 - 支持多个空，使用多种分隔符
            // AI返回的答案可能用多种分隔符，例如："悠久,三千多,三千多" 或 "秦隶、汉隶"
            if (answerText.includes(',')) {
                // 优先使用英文逗号分割
                answers = answerText.split(',').map(a => a.trim());
            } else if (answerText.includes('，')) {
                // 如果没有英文逗号，尝试中文逗号
                answers = answerText.split('，').map(a => a.trim());
            } else if (answerText.includes('、')) {
                // 中文顿号分割（如"秦隶、汉隶"）
                answers = answerText.split('、').map(a => a.trim());
                console.log('填空题答案使用顿号分割:', answers);
            } else if (answerText.includes(';') || answerText.includes('；')) {
                // 尝试分号分割
                answers = answerText.split(/[;；]/).map(a => a.trim());
            } else if (answerText.includes(' ') && answerText.trim().split(/\s+/).length > 1) {
                // 如果包含空格且分割后有多个词，使用空格分割
                // 例如："悠久 三千多 三千多"
                answers = answerText.trim().split(/\s+/);
                console.log('填空题答案使用空格分割:', answers);
            } else {
                // 如果都没有，作为单个答案
                answers = [answerText];
            }
        } else {
            // 简答题等其他题型
            answers = [answerText];
        }

        return answers;
    };

    // 获取题目类型名称
    const getQuestionTypeName = (type) => {
        const typeMap = {
            "0": "单选题",
            "1": "多选题",
            "2": "填空题/简答题",
            "3": "判断题"
        };
        return typeMap[type] || "未知题型";
    };

    const getAnswerFrom = async (question, url2) => {
        var _a;
        const _self = unsafeWindow;
        const configStore = useConfigStore();
        const headers = {
            "Content-Type": "application/json",
            "referer": question.refer,
            "u": _self.uid || _self.getCookie("UID") || _self.getCookie("_uid") || "",
            "t": Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3).toString()
        };
        const data = JSON.stringify({
            "question": question.title,
            "options": question.optionsText,
            "type": question.type,
            "questionData": question.element.outerHTML,
            "workType": question.workType,
            "id": ((_a = question.refer.match(/courseId=(\d+)/)) == null ? void 0 : _a[1]) || "",
            "key": configStore.queryApis[0].token
        });
        await sleep(configStore.otherParams.params[0].value);
        return new Promise((resolve) => {
            const scriptInfo = getScriptInfo();
            GM_xmlhttpRequest({
                url: url2 + `?s=${scriptInfo.author}&v=${scriptInfo.version}`,
                method: "POST",
                headers,
                data,
                timeout: 5e3,
                onload: (response) => {
                    try {
                        const apiResponse = JSON.parse(response.responseText);
                        resolve(apiResponse);
                    } catch (e) {
                        resolve(handleError("解析出错"));
                    }
                },
                onerror: () => resolve(handleError("请求出错")),
                ontimeout: () => resolve(handleError("请求超时"))
            });
        });
    };
    const getAnswer = async (question) => {
        const configStore = useConfigStore();
        const aiConfig = configStore.aiModelConfig;
        const aiEnabled = aiConfig && aiConfig.enabled;
        const answerPriority = aiConfig?.answerPriority || 'database';

        // 根据优先级决定答题顺序
        if (aiEnabled && answerPriority === 'ai') {
            // AI优先：先尝试AI，失败后再尝试题库
            console.log("使用AI优先模式");
            const aiResult = await getAnswerFromAI(question);
            
            if (aiResult.code === 200) {
                return aiResult;
            }
            
            console.log("AI回答失败，尝试使用题库...");
            // AI失败，尝试题库
            for (const url2 of apis) {
                const result = await getAnswerFrom(question, url2);
                if (result.code !== 10003) {
                    return result;
                }
            }
            // 题库也失败，返回AI的错误结果
            return aiResult;
        } else {
            // 题库优先：先尝试题库，失败后再尝试AI
            console.log("使用题库优先模式");
            for (const url2 of apis) {
                const result = await getAnswerFrom(question, url2);
                if (result.code !== 10003) {
                    return result;
                }
            }
            
            // 题库失败，如果启用了AI则尝试AI
            if (aiEnabled) {
                console.log("题库查询失败，尝试使用AI...");
                const aiResult = await getAnswerFromAI(question);
                if (aiResult.code === 200) {
                    return aiResult;
                }
                return aiResult;
            }
            
            return handleError("请求失败");
        }
    };
    class CxQuestionHandler extends BaseQuestionHandler {
        constructor(type, iframe) {
            super();
            __publicField(this, "type");
            __publicField(this, "init", async () => {
                this.questions = [];
                this.parseHtml();
                if (this.questions.length) {
                    this.addLog(`成功解析到${this.questions.length}个题目`, "primary");
                    for (const [index, question] of this.questions.entries()) {
                        const answerData = await getAnswer(question);
                        if (answerData.code === 200) {
                            question.answer = answerData.data.answer;
                            this.fillQuestion(question);
                            this.addLog(`第${index + 1}道题搜索成功`, "success");
                            this.addLog(`剩余次数:${answerData.data.num}`, "primary");
                            this.correctNum += 1;
                        } else {
                            this.addLog(`第${index + 1}道题搜索失败，点击上方答题查看原因`, "danger");
                            question.answer[0] = answerData.msg;
                        }
                        this.addQuestion(question);
                    }
                } else
                    this.addLog("未解析到题目，请进入正确页面", "danger");
                return Promise.resolve(this.correctNum / this.questions.length * 100);
            });
            __publicField(this, "parseHtml", () => {
                if (!this._document)
                    return [];
                if (["zj"].includes(this.type)) {
                    const questionElements = this._document.querySelectorAll(".TiMu");
                    this.addQuestions(questionElements);
                } else if (["zy", "ks"].includes(this.type)) {
                    const questionElements = this._document.querySelectorAll(".questionLi");
                    this.addQuestions(questionElements);
                }
            });
            __publicField(this, "fillQuestion", (question) => {
                var _a, _b;
                if (!this._window)
                    return;
                if (question.type === "0" || question.type === "1") {
                    question.answer.forEach((answer) => {
                        for (const key in question.options) {
                            if (key === this.removeHtml(answer)) {
                                if (["zj", "zy"].includes(this.type)) {
                                    const optionElement = question.options[key];
                                    if (optionElement.getAttribute("aria-checked") === "true")
                                        return;
                                    optionElement == null ? void 0 : optionElement.click();
                                } else if (["ks"].includes(this.type)) {
                                    const optionElement = question.options[key];
                                    if (optionElement.querySelector(".check_answer"))
                                        return;
                                    if (optionElement.querySelector(".check_answer_dx"))
                                        return;
                                    optionElement == null ? void 0 : optionElement.click();
                                }
                            }
                        }
                    });
                } else if (question.type === "2") {
                    // 填空题处理 - 使用学习通.js的逻辑
                    const textareaElements = question.element.querySelectorAll("textarea");
                    const inputElements = question.element.querySelectorAll("input[type='text'], .Zy_TIblanks input, .blanks input, .tiankong input");

                    // 优先处理普通输入框（填空题）
                    if (inputElements.length > 0) {
                        // 从学习通.js的逻辑：答案数组应该直接对应每个空
                        inputElements.forEach((inputElement, index) => {
                            if (Array.isArray(question.answer) && index < question.answer.length) {
                                // 数组中每个元素对应一个空
                                inputElement.value = question.answer[index];

                                // 触发事件确保答案被保存
                                inputElement.dispatchEvent(new Event('input', { bubbles: true }));
                                inputElement.dispatchEvent(new Event('change', { bubbles: true }));
                            } else if (!Array.isArray(question.answer) && index === 0) {
                                // 如果答案不是数组，填入第一个空
                                inputElement.value = question.answer;

                                // 触发事件
                                inputElement.dispatchEvent(new Event('input', { bubbles: true }));
                                inputElement.dispatchEvent(new Event('change', { bubbles: true }));
                            }
                        });
                    }
                    // 如果没有普通输入框，处理textarea（富文本编辑器）
                    else if (textareaElements.length > 0) {
                        textareaElements.forEach((textareaElement, index) => {
                            try {
                                const ueditor = this._window.UE.getEditor(textareaElement.name);
                                if (Array.isArray(question.answer) && index < question.answer.length) {
                                    ueditor.setContent(question.answer[index]);
                                } else if (!Array.isArray(question.answer) && index === 0) {
                                    ueditor.setContent(question.answer);
                                }
                            } catch (e) {
                                // 如果不是UEditor，直接设置值
                                if (Array.isArray(question.answer) && index < question.answer.length) {
                                    textareaElement.value = question.answer[index];
                                } else if (!Array.isArray(question.answer) && index === 0) {
                                    textareaElement.value = question.answer;
                                }
                            }
                        });
                    }
                } else if (question.type === "3") {
                    let answer = "true";
                    if (question.answer[0].match(/(^|,)(正确|是|对|√|T|ri|right|true)(,|$)/)) {
                        answer = "true";
                    } else if (question.answer[0].match(/(^|,)(错误|否|错|×|F|wr|wrong|false)(,|$)/)) {
                        answer = "false";
                    }
                    const trueOrFalse = {
                        "true": "对",
                        "false": "错"
                    };
                    for (const key in question.options) {
                        if (["zj", "zy"].includes(this.type)) {
                            if ((_a = question.options[key].getAttribute("aria-label")) == null ? void 0 : _a.includes(`${trueOrFalse[answer]}选择`)) {
                                if (question.options[key].getAttribute("aria-checked") === "true")
                                    return;
                                (_b = question.options[key]) == null ? void 0 : _b.click();
                            }
                        } else if (["ks"].includes(this.type)) {
                            const optionElement = question.options[key].querySelector(`span[data='${answer}']`);
                            if (optionElement == null ? void 0 : optionElement.querySelector(".check_answer"))
                                return;
                            optionElement == null ? void 0 : optionElement.click();
                        }
                    }
                } else if (question.type === "4" || question.type === "6") {
                    const textareaElement = question.element.querySelector("textarea");
                    if (!textareaElement)
                        return;
                    const ueditor = this._window.UE.getEditor(textareaElement.name);
                    ueditor.setContent(question.answer[0]);
                } else
                    ;
            });
            this.type = type;
            if (iframe) {
                this._document = iframe.contentDocument;
                this._window = iframe.contentWindow;
            }
        }
        extractOptions(optionElements, optionSelector) {
            const optionsObject = {};
            const optionTexts = [];
            optionElements.forEach((optionElement) => {
                var _a;
                const optionTextContent = this.removeHtml(((_a = optionElement.querySelector(optionSelector)) == null ? void 0 : _a.innerHTML) || "");
                optionsObject[optionTextContent] = optionElement;
                optionTexts.push(optionTextContent);
            });
            return [optionsObject, optionTexts];
        }
        addQuestions(questionElements) {
            questionElements.forEach((questionElement) => {
                var _a, _b, _c, _d;
                let questionTitle = "";
                let questionTypeText = "";
                let optionElements;
                let optionsObject = {};
                let optionTexts = [];
                if (["zy", "ks"].includes(this.type)) {
                    const titleElement = ((_a = questionElement == null ? void 0 : questionElement.querySelector("h3")) == null ? void 0 : _a.innerHTML) || "";
                    const colorShallowElement = ((_b = questionElement.querySelector(".colorShallow")) == null ? void 0 : _b.outerHTML) || "";
                    if (["zy"].includes(this.type)) {
                        questionTypeText = (questionElement == null ? void 0 : questionElement.getAttribute("typename")) || "";
                    } else if (["ks"].includes(this.type)) {
                        questionTypeText = this.removeHtml(colorShallowElement).slice(1, 4) || "";
                    }
                    questionTitle = this.removeHtml(titleElement.split(colorShallowElement || "")[1] || "");
                    optionElements = questionElement.querySelectorAll(".answerBg");
                    [optionsObject, optionTexts] = this.extractOptions(optionElements, ".answer_p");
                } else if (["zj"].includes(this.type)) {
                    questionTitle = this.removeHtml(((_c = questionElement.querySelector(".fontLabel")) == null ? void 0 : _c.innerHTML) || "");
                    questionTypeText = this.removeHtml(((_d = questionElement.querySelector(".newZy_TItle")) == null ? void 0 : _d.innerHTML) || "");
                    optionElements = questionElement.querySelectorAll('[class*="before-after"]');
                    [optionsObject, optionTexts] = this.extractOptions(optionElements, ".fl.after");
                }
                this.questions.push({
                    element: questionElement,
                    type: this.questionType[questionTypeText.replace("【", "").replace("】", "")] || "999",
                    title: this.clean(questionTitle),
                    optionsText: optionTexts,
                    options: optionsObject,
                    answer: [],
                    workType: this.type,
                    refer: this._window.location.href
                });
            });
        }
    }
    const useCxChapterLogic = () => {
        const logStore = useLogStore();
        const init = () => {
            const currentUrl = window.location.href;
            if (!currentUrl.includes("&mooc2=1")) {
                window.location.href = currentUrl + "&mooc2=1";
            }
            logStore.addLog(`检测到用户进入到章节学习页面`, "primary");
            logStore.addLog(`正在解析任务点，请稍等5-10秒（如果长时间没有反应，请刷新页面）`, "warning");
        };
        const configStore = useConfigStore();
        const processIframeTask = () => {
            const documentElement = document.documentElement;
            const iframe = documentElement.querySelector("iframe");
            if (!iframe) {
                console.warn("No iframe found.");
                return;
            }
            watchIframe(documentElement);
            CLEANUP_MANAGER.registerEventListener(iframe, "load", function() {
                watchIframe(documentElement);
            });
        };
        const setupInterceptor = () => {
            let currentUrl = window.location.href;
            const intervalId = setInterval(() => {
                if (currentUrl !== window.location.href) {
                    currentUrl = window.location.href;
                    processIframeTask();
                }
            }, 2000);
            CLEANUP_MANAGER.registerInterval(intervalId);
        };
        let currentWatchIframeTaskId = 0;
        const watchIframe = (documentElement) => {
            const thisTaskId = ++currentWatchIframeTaskId;
            IframeUtils.getAllNestedIframes(documentElement).subscribe((allIframes) => {
                console.log(allIframes);
                rxjs.from(allIframes).pipe(concatMap((iframe) => processIframe(iframe))).subscribe({
                    complete: async () => {
                        if (thisTaskId === currentWatchIframeTaskId) {
                            logStore.addLog(`本页任务点已全部完成，正前往下一章节`, "success");
                            if (configStore.platformParams.cx.parts[0].params[1].value) {
                                const nextBtn = documentElement.querySelector("#prevNextFocusNext");
                                if (!nextBtn || nextBtn.style.display === "none") {
                                    logStore.addLog(`已经到达最后一章节，无法跳转`, "danger");
                                } else {
                                    await sleep(configStore.otherParams.params[0].value);
                                    document.querySelector(".jb_btn.jb_btn_92.fr.fs14.nextChapter").click();
                                }
                            } else {
                                logStore.addLog(`已经关闭自动下一章节，在设置里可更改`, "danger");
                            }
                        }
                    }
                });
            });
        };
        const processMedia = async (mediaType, iframeDocument) => {
            return new Promise((resolve, reject) => {
                logStore.addLog(`发现一个${mediaType}，正在解析`, "warning");
                logStore.addLog(`正在尝试播放${mediaType}，请稍等5s`, "primary");
                let isExecuted = false;
                let intervalId = null;
                let pauseListenerKey = null;
                let endedListenerKey = null;
                const timeoutId = setTimeout(() => {
                    if (!isExecuted) {
                        if (intervalId) CLEANUP_MANAGER.clearInterval(intervalId);
                        logStore.addLog(`${mediaType}加载超时`, "danger");
                        reject(new Error(`${mediaType}加载超时`));
                    }
                }, 30000);
                CLEANUP_MANAGER.registerTimeout(timeoutId);
                logStore.addLog("播放成功", "success");
                intervalId = setInterval(async () => {
                    const mediaElement = iframeDocument.documentElement.querySelector(mediaType);
                    if (mediaElement && !isExecuted) {
                        try {
                            await mediaElement.pause();
                            mediaElement.muted = true;
                            await mediaElement.play();
                            const pauseListener = async () => {
                                await sleep(configStore.otherParams.params[0].value);
                                await mediaElement.play();
                            };
                            const endedListener = () => {
                                logStore.addLog(`${mediaType}已播放完成`, "success");
                                if (pauseListenerKey) CLEANUP_MANAGER.removeEventListener(pauseListenerKey);
                                if (endedListenerKey) CLEANUP_MANAGER.removeEventListener(endedListenerKey);
                                if (timeoutId) CLEANUP_MANAGER.clearTimeout(timeoutId);
                                resolve();
                            };
                            pauseListenerKey = CLEANUP_MANAGER.registerEventListener(mediaElement, "pause", pauseListener);
                            endedListenerKey = CLEANUP_MANAGER.registerEventListener(mediaElement, "ended", endedListener);
                            isExecuted = true;
                            CLEANUP_MANAGER.clearInterval(intervalId);
                        } catch (error) {
                            if (intervalId) CLEANUP_MANAGER.clearInterval(intervalId);
                            if (timeoutId) CLEANUP_MANAGER.clearTimeout(timeoutId);
                            reject(error);
                        }
                    }
                }, 2500);
                CLEANUP_MANAGER.registerInterval(intervalId);
            });
        };
        const processWork = async (iframe, iframeDocument, iframeWindow) => {
            logStore.addLog("发现一个作业，正在解析", "warning");
            return new Promise(async (resolve) => {
                if (!iframeDocument)
                    return resolve();
                if (iframeDocument.documentElement.innerText.includes("已完成") || iframeDocument.documentElement.innerText.includes("待批阅")) {
                    logStore.addLog("作业已经完成，跳过", "success");
                    return resolve();
                }
                decrypt(iframeDocument);
                logStore.addLog(`题目列表获取成功`, "primary");
                const correctRate = await new CxQuestionHandler("zj", iframe).init();
                iframeWindow.alert = () => {
                };
                if (configStore.platformParams.cx.parts[0].params[0].value) {
                    logStore.addLog("自动提交已开启，尝试提交", "primary");
                    if (correctRate < Number(configStore.otherParams.params[1].value)) {
                        logStore.addLog(`正确率小于${configStore.otherParams.params[1].value}%，暂存`, "danger");
                        await iframeWindow.noSubmit();
                    } else {
                        logStore.addLog(`正确率大于${configStore.otherParams.params[1].value}%，提交`, "success");
                        await iframeWindow.btnBlueSubmit();
                        await sleep(configStore.otherParams.params[0].value / 2);
                        await iframeWindow.submitCheckTimes();
                        logStore.addLog("提交成功", "success");
                    }
                } else {
                    logStore.addLog("未开启自动提交，暂存", "primary");
                    await iframeWindow.noSubmit();
                }
                logStore.addLog("作业已完成", "success");
                return resolve();
            });
        };
        const processPpt = async (iframeWindow) => {
            const pptWindow = iframeWindow.document.querySelector("#panView").contentWindow;
            logStore.addLog("发现一个PPT，正在解析", "warning");
            await pptWindow.scrollTo(
                {
                    top: pptWindow.document.body.scrollHeight,
                    behavior: "smooth"
                }
            );
            logStore.addLog("阅读完成", "success");
            return Promise.resolve();
        };
        const processBook = async (iframeWindow) => {
            logStore.addLog("发现一个电子书，正在解析", "warning");
            unsafeWindow.top.onchangepage(iframeWindow.getFrameAttr("end"));
            logStore.addLog("阅读完成", "success");
            return Promise.resolve();
        };
        const waitIframeLoad = async (iframe) => {
            return new Promise((resolve, reject) => {
                const timeoutId = setTimeout(() => {
                    CLEANUP_MANAGER.clearInterval(intervalId);
                    reject(new Error('iframe加载超时'));
                }, 10000);
                CLEANUP_MANAGER.registerTimeout(timeoutId);
                const intervalId = setInterval(async () => {
                    var _a;
                    if (iframe.contentDocument && ((_a = iframe.contentDocument) == null ? void 0 : _a.readyState) == "complete") {
                        CLEANUP_MANAGER.clearInterval(intervalId);
                        CLEANUP_MANAGER.clearTimeout(timeoutId);
                        resolve();
                    }
                }, 500);
                CLEANUP_MANAGER.registerInterval(intervalId);
            });
        };
        const processIframe = async (iframe) => {
            var _a, _b;
            const iframeSrc = iframe.src;
            const iframeDocument = iframe.contentDocument;
            const iframeWindow = iframe.contentWindow;
            if (!iframeDocument || !iframeWindow)
                return Promise.resolve();
            if (iframeSrc.includes("javascript:"))
                return Promise.resolve();
            await waitIframeLoad(iframe);
            const parentClass = ((_a = iframe.parentElement) == null ? void 0 : _a.className) || "";
            if (parentClass.includes("ans-job-finished")) {
                logStore.addLog("发现一个已完成任务点", "success");
            } else {
                if (iframeSrc.includes("api/work")) {
                    return processWork(iframe, iframeDocument, iframeWindow);
                }
                if (configStore.platformParams.cx.parts[0].params[2].value) {
                    logStore.addLog("只答题，不做其他已开启，可在设置里调整", "primary");
                } else {
                    const ansJobIcon = (_b = iframe.parentElement) == null ? void 0 : _b.querySelector(".ans-job-icon");
                    if (ansJobIcon) {
                        if (iframeSrc.includes("video")) {
                            return processMedia("video", iframeDocument);
                        } else if (iframeSrc.includes("audio")) {
                            return processMedia("audio", iframeDocument);
                        } else if (["ppt", "doc", "pptx", "docx", "pdf"].some((type) => iframeSrc.includes("modules/" + type))) {
                            return processPpt(iframeWindow);
                        } else if (["innerbook"].some((type) => iframeSrc.includes("modules/" + type))) {
                            return processBook(iframeWindow);
                        }
                    }
                }
            }
            return Promise.resolve();
        };
        init();
        processIframeTask();
        setupInterceptor();
    };
    const useCxWorkLogic = async () => {
        const logStore = useLogStore();
        useConfigStore();
        logStore.addLog(`进入新版作业页面，开始准备答题`, "primary");
        logStore.addLog(`正在解析题目, 请等待5s`, "warning");
        await new CxQuestionHandler("zy").init();
    };
    const useCxExamLogic = async () => {
        const logStore = useLogStore();
        const configStore = useConfigStore();
        logStore.addLog(`进入新版考试页面，开始准备答题`, "primary");
        logStore.addLog(`正在解析题目, 请等待5s`, "warning");
        await new CxQuestionHandler("ks").init();
        if (configStore.platformParams.cx.parts[1].params[0].value) {
            logStore.addLog("自动切换已开启，正在前往下一题", "success");
            await sleep(configStore.otherParams.params[0].value);
            unsafeWindow.getTheNextQuestion(1);
        } else {
            logStore.addLog("已经关闭自动切换，在设置里可更改", "danger");
        }
    };
    class ZhsQuestionHandler extends BaseQuestionHandler {
        constructor() {
            super();
            __publicField(this, "init", async () => {
                var _a;
                this.questions = [];
                this.parseHtml();
                if (this.questions.length) {
                    this.addLog(`成功解析到${this.questions.length}个题目`, "primary");
                    for (const [index, question] of this.questions.entries()) {
                        const answerData = await getAnswer(question);
                        if (answerData.code === 200) {
                            question.answer = answerData.data.answer;
                            this.fillQuestion(question);
                            this.addLog(`第${index + 1}道题搜索成功`, "success");
                            this.addLog(`剩余次数:${answerData.data.num}`, "primary");
                        } else {
                            this.addLog(`第${index + 1}道题搜索失败，点击上方答题查看原因`, "danger");
                            question.answer[0] = answerData.msg;
                        }
                        this.addQuestion(question);
                        await ((_a = this._document) == null ? void 0 : _a.querySelectorAll(".switch-btn-box > button")[1]).click();
                    }
                } else
                    this.addLog("未解析到题目，请刷新重试或进入答题页面", "danger");
            });
            __publicField(this, "parseHtml", () => {
                if (!this._document)
                    return [];
                const questionElements = this._document.querySelectorAll(".examPaper_subject");
                this.addQuestions(questionElements);
            });
            __publicField(this, "fillQuestion", (question) => {
                if (!this._window)
                    return;
                if (question.type === "单选题" || question.type === "多选题") {
                    question.answer.forEach((answer) => {
                        for (const key in question.options) {
                            if (key === this.removeHtml(answer)) {
                                question.options[key].click();
                            }
                        }
                    });
                } else if (question.type === "判断题") {
                    let answer = "对";
                    if (question.answer[0].match(/(^|,)(正确|是|对|√|T|ri|right|true)(,|$)/)) {
                        answer = "对";
                    } else if (question.answer[0].match(/(^|,)(错误|否|错|×|F|wr|wrong|false)(,|$)/)) {
                        answer = "错";
                    }
                    for (const key in question.options) {
                        if (key === answer) {
                            question.options[key].click();
                        }
                    }
                } else
                    ;
            });
        }
        extractOptions(optionElements, optionSelector) {
            const optionsObject = {};
            const optionTexts = [];
            optionElements.forEach((optionElement) => {
                var _a;
                const optionTextContent = this.removeHtml(((_a = optionElement.querySelector(optionSelector)) == null ? void 0 : _a.innerHTML) || "");
                optionsObject[optionTextContent] = optionElement;
            });
            return [optionsObject, optionTexts];
        }
        addQuestions(questionElements) {
            questionElements.forEach((questionElement) => {
                var _a, _b;
                const questionTitle = (questionElement == null ? void 0 : questionElement.querySelector(".subject_describe div,.smallStem_describe p")).__Ivue__._data.shadowDom.textContent;
                const questionType = ((_b = (_a = questionElement == null ? void 0 : questionElement.querySelector(".subject_type span")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.slice(1, 4)) || "";
                const [optionsObject, optionTexts] = this.extractOptions(questionElement == null ? void 0 : questionElement.querySelectorAll(".label"), ".node_detail");
                this.questions.push({
                    element: questionElement,
                    type: questionType,
                    title: questionTitle,
                    optionsText: optionTexts,
                    options: optionsObject,
                    answer: [],
                    workType: "zhs",
                    refer: this._window.location.href
                });
            });
        }
    }
    const hookError = () => {
        console.log("hookError");
        const oldset = unsafeWindow.setInterval;
        const oldout = unsafeWindow.setTimeout;
        unsafeWindow.setInterval = function(...args) {
            const err = new Error();
            if (err.stack && err.stack.indexOf("checkoutNotTrustScript") !== -1) {
                return -1;
            }
            return oldset.call(this, ...args);
        };
        unsafeWindow.setTimeout = function(...args) {
            const err = new Error();
            if (err.stack && err.stack.indexOf("checkoutNotTrustScript") !== -1) {
                return -1;
            }
            return oldout.call(this, ...args);
        };
    };
    class XMLHttpRequestInterceptor {
        constructor(urlList, callback) {
            __publicField(this, "xhr");
            __publicField(this, "originalOpen");
            __publicField(this, "originalSend");
            __publicField(this, "callback");
            this.xhr = new XMLHttpRequest();
            this.originalOpen = this.xhr.open;
            this.originalSend = this.xhr.send;
            this.callback = callback;
            this.intercept(urlList);
        }
        intercept(urlList) {
            const self = this;
            XMLHttpRequest.prototype.open = function(method, url2) {
                self.originalOpen.apply(this, [method, url2]);
                const shouldIntercept = urlList.some((urlItem) => url2.includes(urlItem));
                if (shouldIntercept) {
                    self.callback(this.responseText);
                }
            };
        }
    }
    const useZhsAnswerLogic = async () => {
        hookError();
        const logStore = useLogStore();
        useConfigStore();
        logStore.addLog(`进入答题页面，开始准备答题`, "primary");
        logStore.addLog(`正在解析题目, 请等待5s`, "warning");
        new XMLHttpRequestInterceptor(["gateway/t/v1/answer/hasAnswer"], async () => {
            await sleep(1);
            unsafeWindow.document.getSelection = function() {
                return {
                    removeAllRanges: function() {
                    }
                };
            };
            unsafeWindow.document.onselectstart = true;
            unsafeWindow.document.oncontextmenu = true;
            unsafeWindow.document.oncut = true;
            unsafeWindow.document.oncopy = true;
            unsafeWindow.document.onpaste = true;
            await new ZhsQuestionHandler().init();
            return true;
        });
    };
    const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
        __name: "Index",
        emits: ["customEvent"],
        setup(__props, { emit: __emit }) {
            var _a;
            const cardWidth = vue.ref("310px");
            const isShow = vue.ref(false);
            (_a = document.querySelector("li>a.experience:not([onclick])")) == null ? void 0 : _a.click();
            const configStore = useConfigStore();
            const logStore = useLogStore();
            const questionStore = useQuestionStore();
            const url2 = window.location.href;
            if (configStore.menuIndex === "1") {
                cardWidth.value = "630px";
            } else {
                cardWidth.value = "310px";
            }
            vue.watch(() => configStore.menuIndex, (newVal) => {
                if (newVal === "1") {
                    cardWidth.value = "630px";
                } else {
                    cardWidth.value = "310px";
                }
            }, { deep: true });
            logStore.addLog("用户悉知：使用脚本即为完全同意用户协议", "success");
            logStore.addLog("脚本加载成功，正在解析网页", "primary");
            logStore.addLog("请不要多个脚本同时使用，会有脚本冲突问题", "warning");
            logStore.addLog("如果脚本出现异常，请用谷歌、火狐等浏览器", "warning");
            const urlLogicPairs = [
                { keyword: "/mycourse/studentstudy", logic: useCxChapterLogic },
                { keyword: "/mooc2/work/dowork", logic: useCxWorkLogic },
                { keyword: "/exam-ans/exam", logic: useCxExamLogic },
                {
                    keyword: "mycourse/stu?courseid",
                    logic: () => {
                        logStore.addLog("该页面无任务，请进入章节或答题页面使用", "error");
                    }
                },
                { keyword: "/stuExamWeb.html", logic: useZhsAnswerLogic }
            ];
            const executeLogicByUrl = (url22) => {
                for (const { keyword, logic } of urlLogicPairs) {
                    if (url22.includes(keyword)) {
                        logic();
                        isShow.value = true;
                        return;
                    }
                }
                isShow.value = false;
            };
            executeLogicByUrl(url2);
            const emit = __emit;
            emit("customEvent", isShow.value);
            // 创建安全的组件包装器
            const SafeComponent = (component, fallbackText = "组件加载失败") => {
                return {
                    setup(props) {
                        const hasError = vue.ref(false);
                        const errorMessage = vue.ref("");

                        return () => {
                            if (hasError.value) {
                                return vue.h('div', {
                                    style: {
                                        padding: '20px',
                                        textAlign: 'center',
                                        color: '#909399'
                                    }
                                }, [
                                    vue.h('p', fallbackText),
                                    vue.h('p', { style: { fontSize: '12px', marginTop: '10px' } }, errorMessage.value)
                                ]);
                            }

                            try {
                                if (!component) {
                                    hasError.value = true;
                                    errorMessage.value = "组件未定义";
                                    return vue.h('div', { style: { padding: '20px', textAlign: 'center' } }, fallbackText);
                                }
                                return vue.h(component, props);
                            } catch (e) {
                                console.error('组件渲染错误:', e);
                                hasError.value = true;
                                errorMessage.value = e.message || "未知错误";
                                return vue.h('div', { style: { padding: '20px', textAlign: 'center' } }, fallbackText);
                            }
                        };
                    }
                };
            };

            const tabs = [
                {
                    label: "首页",
                    icon: position_default,
                    component: ScriptHome,
                    props: { "log-list": logStore.logList }
                },
                {
                    label: "答题",
                    icon: document_remove_default,
                    component: QuestionTable,
                    props: { "question-list": questionStore.questionList }
                },
                {
                    label: "设置",
                    icon: setting_default,
                    component: ScriptSetting,
                    props: { "global-config": configStore }
                },
                {
                    label: "AI模型",
                    icon: setting_default,
                    component: SafeComponent(AIModelSetting, "AI模型设置加载失败，请刷新页面重试"),
                    props: { "aiConfig": configStore.aiModelConfig }
                },
                {
                    label: "AI聊天",
                    icon: document_remove_default,
                    component: SafeComponent(AIChat, "AI聊天功能加载失败，请刷新页面重试"),
                    props: {}
                }
            ];
            return (_ctx, _cache) => {
                const _component_el_tab_pane = vue.resolveComponent("el-tab-pane");
                const _component_el_tabs = vue.resolveComponent("el-tabs");
                return vue.openBlock(), vue.createElementBlock("div", {
                    style: vue.normalizeStyle({ width: cardWidth.value }),
                    class: "card_content"
                }, [
                    vue.createVNode(_component_el_tabs, {
                        modelValue: vue.unref(configStore).menuIndex,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).menuIndex = $event),
                        class: "demo-tabs"
                    }, {
                        default: vue.withCtx(() => [
                            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs, (tab) => {
                                return vue.createVNode(_component_el_tab_pane, {
                                    key: tab.label,
                                    label: tab.label
                                }, {
                                    default: vue.withCtx(() => [
                                        tab.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(tab.component), vue.mergeProps({
                                            key: 0,
                                            ref_for: true
                                        }, tab.props), null, 16)) : vue.createCommentVNode("", true)
                                    ]),
                                    _: 2
                                }, 1032, ["label"]);
                            }), 64))
                        ]),
                        _: 1
                    }, 8, ["modelValue"])
                ], 4);
            };
        }
    });
    const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
        __name: "ZoomButtons",
        emits: ["toggleZoom"],
        setup(__props, { emit: __emit }) {
            const emit = __emit;
            const toggleZoom = (value) => {
                emit("toggleZoom", value);
            };
            return (_ctx, _cache) => {
                const _component_el_icon = vue.resolveComponent("el-icon");
                return vue.openBlock(), vue.createElementBlock("div", {
                    onMousedown: _cache[2] || (_cache[2] = vue.withModifiers(() => {
                    }, ["stop"]))
                }, [
                    vue.createVNode(_component_el_icon, {
                        onClick: _cache[0] || (_cache[0] = ($event) => toggleZoom(true)),
                        size: "small",
                        style: { "cursor": "pointer" }
                    }, {
                        default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(minus_default))
                        ]),
                        _: 1
                    }),
                    vue.createVNode(_component_el_icon, {
                        onClick: _cache[1] || (_cache[1] = ($event) => toggleZoom(false)),
                        size: "small",
                        style: { "cursor": "pointer", "margin-left": "8px" }
                    }, {
                        default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(full_screen_default))
                        ]),
                        _: 1
                    })
                ], 32);
            };
        }
    });
    const _hoisted_1 = { class: "overlay" };
    const _hoisted_2 = { class: "title" };
    const _hoisted_3 = { class: "minus" };
    const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
        __name: "layout",
        setup(__props) {
            const isShow = vue.ref(true);
            const configStore = useConfigStore();
            const stopWatch = vue.watch(configStore, (newVal) => {
                GM_setValue("config", JSON.stringify(newVal));
            }, { deep: true });
            CLEANUP_MANAGER.registerWatcher(stopWatch);
            vue.onUnmounted(() => {
                stopWatch();
            });

            // 添加快捷键监听
            vue.onMounted(() => {
                const handleKeydown = (event) => {
                    // 获取配置的快捷键
                    const hotkey = (configStore.hideHotkey || "ctrl+alt+l").toLowerCase();

                    // 解析快捷键配置
                    const keys = hotkey.split('+').map(k => k.trim());
                    const needCtrl = keys.includes('ctrl');
                    const needAlt = keys.includes('alt');
                    const needShift = keys.includes('shift');
                    const mainKey = keys.find(k => !['ctrl', 'alt', 'shift'].includes(k));

                    // 检查按键组合
                    if (needCtrl && !event.ctrlKey) return;
                    if (needAlt && !event.altKey) return;
                    if (needShift && !event.shiftKey) return;

                    // 检查主键
                    if (mainKey && event.key.toLowerCase() === mainKey) {
                        event.preventDefault();
                        isShow.value = !isShow.value;
                    }
                };

                document.addEventListener('keydown', handleKeydown);

                vue.onUnmounted(() => {
                    document.removeEventListener('keydown', handleKeydown);
                });
            });

            const isDragging = vue.ref(false);
            const offsetX = vue.ref(0);
            const offsetY = vue.ref(0);
            const moveStyle = vue.ref({
                left: configStore.position.x,
                top: configStore.position.y
            });
            const startDrag = (event) => {
                isDragging.value = true;
                offsetX.value = event.clientX - event.target.getBoundingClientRect().left;
                offsetY.value = event.clientY - event.target.getBoundingClientRect().top;
                document.addEventListener("mousemove", drag);
                document.addEventListener("mouseup", endDrag);
            };
            const drag = (event) => {
                if (!isDragging.value)
                    return;
                const x = event.clientX - offsetX.value;
                const y = event.clientY - offsetY.value;
                moveStyle.value = {
                    left: `${x - 11}px`,
                    top: `${y - 11}px`
                };
                configStore.position.x = x - 11 + "px";
                configStore.position.y = y - 11 + "px";
                if (x < 0) {
                    moveStyle.value.left = "0px";
                    configStore.position.x = "0px";
                }
                if (y < 0) {
                    moveStyle.value.top = "0px";
                    configStore.position.y = "0px";
                }
                if (x > window.innerWidth - 334) {
                    moveStyle.value.left = `${window.innerWidth - 334}px`;
                    configStore.position.x = `${window.innerWidth - 334}px`;
                }
                if (y > window.innerHeight - 35) {
                    moveStyle.value.top = `${window.innerHeight - 35}px`;
                    configStore.position.y = `${window.innerHeight - 35}px`;
                }
            };
            const endDrag = () => {
                isDragging.value = false;
                document.removeEventListener("mousemove", drag);
                document.removeEventListener("mouseup", endDrag);
            };
            return (_ctx, _cache) => {
                const _component_el_icon = vue.resolveComponent("el-icon");
                const _component_el_tooltip = vue.resolveComponent("el-tooltip");
                const _component_el_text = vue.resolveComponent("el-text");
                const _component_el_divider = vue.resolveComponent("el-divider");
                const _component_el_card = vue.resolveComponent("el-card");
                const _component_el_button = vue.resolveComponent("el-button");

                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                    // 主窗口
                    vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
                        style: vue.normalizeStyle(moveStyle.value),
                        class: "main-page"
                    }, [
                        vue.withDirectives(vue.createElementVNode("div", _hoisted_1, null, 512), [
                            [vue.vShow, isDragging.value]
                        ]),
                        vue.createVNode(_component_el_card, {
                            style: { "border": "0" },
                            "close-on-click-modal": false,
                            "lock-scroll": false,
                            modal: false,
                            "show-close": false,
                            "modal-class": "modal"
                        }, {
                            header: vue.withCtx(() => [
                                vue.createElementVNode("div", {
                                    class: "card-header",
                                    onMousedown: startDrag
                                }, [
                                    vue.createElementVNode("div", _hoisted_2, [
                                        vue.createElementVNode("span", null, vue.toDisplayString(vue.unref(configStore).platformParams[vue.unref(configStore).platformName].name), 1),
                                        vue.createVNode(_component_el_tooltip, {
                                            teleported: "",
                                            effect: "dark",
                                            placement: "top-start",
                                            content: "<span>注意事项：<br/>请尽量使用新版，不要使用旧版。<br/></span>",
                                            "raw-content": ""
                                        }, {
                                            default: vue.withCtx(() => [
                                                vue.createVNode(_component_el_icon, {
                                                    style: { "margin-left": "5px" },
                                                    size: "small"
                                                }, {
                                                    default: vue.withCtx(() => [
                                                        vue.createVNode(vue.unref(warning_default))
                                                    ]),
                                                    _: 1
                                                })
                                            ]),
                                            _: 1
                                        })
                                    ]),
                                    vue.createVNode(_sfc_main$2, {
                                        onToggleZoom: _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).isMinus = $event)
                                    })
                                ], 32)
                            ]),
                            default: vue.withCtx(() => [
                                vue.withDirectives(vue.createVNode(_sfc_main$3, {
                                    onCustomEvent: _cache[1] || (_cache[1] = (newValue) => isShow.value = newValue)
                                }, null, 512), [
                                    [vue.vShow, !vue.unref(configStore).isMinus]
                                ]),
                                vue.withDirectives(vue.createElementVNode("div", _hoisted_3, [
                                    vue.createVNode(_component_el_text, {
                                        type: "info",
                                        size: "small"
                                    }, {
                                        default: vue.withCtx(() => [
                                            vue.createTextVNode("已最小化，点击上方按钮恢复")
                                        ]),
                                        _: 1
                                    }),
                                    vue.createVNode(_component_el_divider, {
                                        "border-style": "dashed",
                                        style: { "margin": "0" }
                                    })
                                ], 512), [
                                    [vue.vShow, vue.unref(configStore).isMinus]
                                ])
                            ]),
                            _: 1
                        })
                    ], 4)), [
                        [vue.vShow, isShow.value]
                    ])
                ]);
            };
        }
    });
    const _sfc_main = /* @__PURE__ */ vue.defineComponent({
        __name: "App",
        setup(__props) {
            const configStore = useConfigStore();
            const url2 = window.location.href;
            if (url2.includes("chaoxing"))
                configStore.platformName = "cx";
            else if (url2.includes("zhihuishu"))
                configStore.platformName = "zhs";
            return (_ctx, _cache) => {
                return vue.openBlock(), vue.createBlock(_sfc_main$1);
            };
        }
    });
    const cssLoader = (e) => {
        const t = GM_getResourceText(e), o = document.createElement("style");
        return o.innerText = t, document.head.append(o), t;
    };
    cssLoader("ElementPlus");
    const layoutCss = ".main-page {\n    z-index: 100003;\n    position: fixed;\n\n    .overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 1001;\n    }\n\n    .el-card {\n        .card-header {\n            display: flex;\n            justify-content: space-between;\n            flex-direction: row;\n            align-items: center;\n            margin: 0;\n            padding: 0;\n            cursor: move;\n\n            .title {\n                font-size: 14px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                font-weight: 500;\n            }\n        }\n\n        .minus {\n            margin: 5px 10px -10px 0;\n        }\n    }\n\n    .demo-tabs {\n        display: initial;\n    }\n\n    .el-card__header {\n\n        background-color: #1f71e0;\n        color: white;\n        padding: 7px 10px 7px 16px;\n        margin: 0;\n    }\n\n    .el-card__body {\n        padding: 0 16px 20px 16px;\n    }\n\n    .el-tabs__nav-wrap::after{\n        height: 1px;\n    }\n    .el-tabs__active-bar{\n        background-color: #176ae5;\n    }\n\n    .el-tabs__item{\n        font-size: 13px;\n        height: 34px;\n    }\n\n    .el-tabs__item.is-top{\n        font-weight: normal;\n        color: #4e5969;\n        padding: 0 8px 0 12px;\n    }\n\n    .el-tabs__item.is-active {\n        font-weight: 500;\n        color: #176ae5;\n        padding: 0 8px 0 12px;\n    }\n}";
    const hookWebpack = () => {
        let originCall = unsafeWindow.Function.prototype.call;
        unsafeWindow.Function.prototype.call = function(...args) {
            var _a, _b;
            const result = originCall.apply(this, args);
            if (((_b = (_a = args[0]) == null ? void 0 : _a.a) == null ? void 0 : _b.version) === "2.5.0") {
                const install = args[1].exports.a.install;
                args[1].exports.a.install = function(...installArgs) {
                    installArgs[0].mixin({
                        mounted: function() {
                            this.$el["__Ivue__"] = this;
                        }
                    });
                    return install.apply(this, installArgs);
                };
                return result;
            }
            return result;
        };
    };
    // =================== 应用初始化改进 ===================
    const url = unsafeWindow.location.href;

    // 添加单例标记，防止重复初始化
    let isInitialized = false;
    let initTimer = null;

    // 浏览器兼容性检查
    const checkBrowserCompatibility = () => {
        const warnings = [];

        // 检查必要的API支持
        if (!window.Promise) {
            warnings.push('Promise API不支持');
        }
        if (!window.fetch && !GM_xmlhttpRequest) {
            warnings.push('网络请求API不支持');
        }
        if (!document.querySelector) {
            warnings.push('querySelector不支持');
        }

        if (warnings.length > 0) {
            console.error('浏览器兼容性问题:', warnings.join(', '));
            alert('您的浏览器版本过低，请升级浏览器以使用此脚本。推荐使用Chrome、Firefox或Edge浏览器。');
            return false;
        }
        return true;
    };

    // 初始化前检查
    if (!checkBrowserCompatibility()) {
        console.error('浏览器兼容性检查失败，脚本停止运行');
        return;
    }

    // 针对智慧树平台的特殊处理
    if (url.includes("zhihuishu.com")) {
        hookWebpack();
        hookError();
    }

    // 改进的应用初始化函数（添加单例保护）
    const initApp = () => {
        // 防止重复初始化
        if (isInitialized) {
            console.log('脚本已初始化，跳过重复初始化');
            return;
        }

        // 检查是否已存在实例
        const existingApp = document.querySelector('#xuexitong-helper-shadow-root, #xuexitong-helper-app, #xuexitong-helper-app-fallback');
        if (existingApp) {
            console.log('检测到已存在的脚本实例，跳过初始化');
            isInitialized = true;
            return;
        }

        // 清理所有定时器
        if (initTimer) {
            clearInterval(initTimer);
            initTimer = null;
        }

        // 标记为已初始化
        isInitialized = true;
        try {
            console.log('开始初始化脚本...');

            const app = vue.createApp(_sfc_main);
            const pinia$1 = pinia.createPinia();
            app.use(pinia$1);
            app.use(ElementPlus);

            // 添加全局错误处理
            app.config.errorHandler = (err, instance, info) => {
                console.error('Vue错误:', err);
                console.error('错误信息:', info);
            };

            // 创建应用容器（兼容性改进）
            let appContainer;
            try {
                // 尝试使用Shadow DOM
                const shadow_root = document.createElement("div");
                shadow_root.id = "xuexitong-helper-shadow-root";
                const app2 = document.createElement("div");
                app2.id = "xuexitong-helper-app";

                document.body.appendChild(shadow_root);

                // 检查Shadow DOM支持
                if (shadow_root.attachShadow) {
                    const shadow = shadow_root.attachShadow({ mode: "closed" });
                    shadow.appendChild(app2);

                    // 样式处理（兼容性改进）
                    try {
                        if (typeof CSSStyleSheet !== 'undefined' && CSSStyleSheet.prototype.replace) {
                            const sheet = new CSSStyleSheet();
                            const sheet1 = new CSSStyleSheet();
                            const eleStyle = GM_getResourceText("ElementPlusStyle") || '';

                            sheet.replace(eleStyle).catch(e => {
                                console.warn('样式表加载失败，使用备用方案');
                                const style = document.createElement('style');
                                style.textContent = eleStyle;
                                shadow.appendChild(style);
                            });

                            sheet1.replace(layoutCss);

                            if (shadow.adoptedStyleSheets) {
                                shadow.adoptedStyleSheets = [sheet, sheet1];
                            } else {
                                // 降级方案
                                const style = document.createElement('style');
                                style.textContent = eleStyle + '\n' + layoutCss;
                                shadow.appendChild(style);
                            }
                        } else {
                            // 旧版浏览器降级方案
                            const style = document.createElement('style');
                            style.textContent = (GM_getResourceText("ElementPlusStyle") || '') + '\n' + layoutCss;
                            shadow.appendChild(style);
                        }
                    } catch (styleError) {
                        console.warn('样式加载错误:', styleError);
                    }

                    appContainer = app2;
                } else {
                    // 不支持Shadow DOM的降级方案
                    console.warn('Shadow DOM不支持，使用普通DOM');
                    document.body.appendChild(app2);

                    // 添加样式到head
                    const style = document.createElement('style');
                    style.textContent = (GM_getResourceText("ElementPlusStyle") || '') + '\n' + layoutCss;
                    document.head.appendChild(style);

                    appContainer = app2;
                }
            } catch (domError) {
                console.error('DOM创建错误:', domError);
                // 最简单的降级方案
                appContainer = document.createElement("div");
                appContainer.id = "xuexitong-helper-app-fallback";
                document.body.appendChild(appContainer);
            }

            // 挂载Vue应用
            app.mount(appContainer);
            console.log('✅ 脚本初始化成功');

        } catch (error) {
            console.error('❌ 脚本初始化失败:', error);

            // 显示用户友好的错误提示
            const showError = () => {
                const errorMsg = document.createElement('div');
                errorMsg.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #f44336;
                    color: white;
                    padding: 12px 20px;
                    border-radius: 4px;
                    z-index: 999999;
                    font-size: 14px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                `;
                errorMsg.innerHTML = `
                    <div>网课助手加载失败</div>
                    <div style="font-size: 12px; margin-top: 5px;">请尝试刷新页面或检查控制台错误</div>
                `;
                document.body.appendChild(errorMsg);

                setTimeout(() => {
                    if (errorMsg.parentNode) {
                        errorMsg.parentNode.removeChild(errorMsg);
                    }
                }, 8000);
            };

            if (document.body) {
                showError();
            } else {
                document.addEventListener('DOMContentLoaded', showError);
            }
        }
    };

    // 改进的DOM加载检测（防止重复初始化）
    const waitForReady = () => {
        // 如果已经初始化，直接返回
        if (isInitialized) {
            console.log('脚本已初始化，跳过waitForReady');
            return;
        }

        // 如果文档已经加载完成
        if (document.readyState === "complete" ||
            (document.readyState === "interactive" && document.body)) {
            // 使用requestAnimationFrame确保渲染完成
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(() => {
                    setTimeout(initApp, 50);
                });
            } else {
                setTimeout(initApp, 100);
            }
        } else {
            // 监听DOM加载完成事件
            const initOnReady = () => {
                if (document.readyState === "complete" && !isInitialized) {
                    clearInterval(initTimer);
                    initTimer = null;
                    initApp();
                }
            };

            // 使用单一定时器，避免重复
            if (!initTimer) {
                initTimer = setInterval(initOnReady, 100);
            }

            // 添加事件监听作为备用（使用once选项避免重复）
            document.addEventListener('DOMContentLoaded', () => {
                if (initTimer) {
                    clearInterval(initTimer);
                    initTimer = null;
                }
                if (!isInitialized) {
                    setTimeout(initApp, 50);
                }
            }, { once: true });

            // 超时保护
            setTimeout(() => {
                if (initTimer) {
                    clearInterval(initTimer);
                    initTimer = null;
                }
                if (document.body && !isInitialized) {
                    initApp();
                }
            }, 5000);
        }
    };

    // 开始初始化流程
    waitForReady();
    // =================== 应用初始化改进结束 ===================

})(Vue, Pinia, rxjs, md5, ElementPlus);
