module.exports = {
    "extends": "airbnb",
    "plugins": [],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "impliedStrict": true
        }
    },
    "env": {
        "es6": true,
        "browser": false,
        "node": true,
        "jquery": false,
        "mocha": true
    },
    /**
     * "off" 或 0 - 关闭规则 不校验
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    "rules": {
        //严格模式
        "strict": "off",
        "react/require-extension": "off",
        //强制回调最大五层
        "max-nested-callbacks": [
            1,
            5
        ],
        //必须使用方法表达式的方式声明函数。
        "func-style": [
            2,
            "expression"
        ],
        //禁止在return、throw、continue 和 break语句之后出现不可达代码
        "no-unreachable": 1,
        // 要求箭头函数体使用大括号
        "arrow-body-style": "off",
        //
        "no-return-await": 0,
        //        "callback-return": 0,
        //空格
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        // 不允许对 function 的参数进行重新赋值
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        // 禁用 console
        "no-console": "off",
        // 禁用 debugge
        "no-debugger": 1,
        // 要求使用 let 或 const 而不是 var
        "no-var": 1,
        // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
        "semi": [
            2,
            "always"
        ],
        //  禁用行尾空格
        "no-trailing-spaces": 0,
        // 文件末尾强制换行
        "eol-last": 0,
        // 禁止标识符中有悬空下划线_bar
        "no-underscore-dangle": 0,
        //        "no-alert": 0,
        // 禁用不必要的嵌套块
        "no-lone-blocks": 0,
        // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
        "default-case": 0,
        // 禁止使用特定的语法
        "no-restricted-syntax": 0,
        // 要求使用 const 声明那些声明后不再被修改的变量
        "prefer-const": "off",
        // 要求使用模板字面量而非字符串连接
        "prefer-template": "error",
        // 禁止在注释中使用特定的警告术语
        //        "no-warning-comments": "off"
        // 禁止在代码行后使用内联注释
        //        "no-inline-comments": "off",
        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        //        "no-empty-function": "off"
        // 要求或禁止对象字面量中方法和属性使用简写语法
        //        "object-shorthand": 0
        // 强制一行的最大长度
        "max-len": [
            1,
            200
        ],
        // 禁止 var 声明 与外层作用域的变量同名
        //        "no-shadow": 0,
        // 不允许在变量定义之前使用它们
        //        "no-use-before-define": 0,
        //  要求 return 语句要么总是指定返回的值，要么不指定
        "consistent-return": "off",
        // 不允许在变量定义之前使用它们
        "no-use-before-define": "off",
        // 强制在 function的左括号之前使用一致的空格
        "space-before-function-paren": "off",
        // 要求或禁止块内填充
        "padded-blocks": "off",
        //////////// EGG
        // 要求generator 函数内有 yield
        "require-yield": 0,
        // 要求箭头函数的参数使用圆括号
        "arrow-parens": "off",
        // 要求 require() 出现在顶层模块作用域中
        "global-require": "off",
        // 要求 for-in 循环中有一个 if 语句
        "guard-for-in": "off",
        // 禁止使用一元操作符 ++ 和 --
        "no-plusplus": "off",
        // 禁止在非赋值或条件语句中使用 new 操作符
        "no-new": "off",
        // 禁止出现未使用过的表达式
        "no-unused-expressions": "off",
        // 要求或禁止在可能的情况下要求使用简化的赋值操作符
        "operator-assignment": "off",
        // 禁用按位运算符
        "no-bitwise": 0,
        // 禁用 continue 语句
        "no-continue": 0
    }
}