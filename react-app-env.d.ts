/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

declare module '*.jpeg' {
    const value: string
    export default value
}

declare module '*.png' {
    const value: string
    export default value
}

declare module '*.module.scss' {
    const content: Record<string, string>
    export default content
}
