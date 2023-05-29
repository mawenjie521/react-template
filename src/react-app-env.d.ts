declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.less' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
declare module '*.png' {
    const src: string;
    export default src;
}
declare namespace JSX {
    interface IntrinsicAttributes<T> {
        clstag?: string;
    }
}
declare namespace React {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        clstag?: string;
    }
}
