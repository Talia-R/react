import type { ReactNode } from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
    children : React.ReactNode;
}

export function Heading({ children }: HeadingProps){
    return <h1 className={styles.heading}>{children}</h1>;
}

// acima é a mesma coisa que:

// export function Heading(props: HeadingProps){
//     const {children} = props
//     return <h1>{children}</h1>;
// } isso é desestruturização, mesma coisa que:



// export function Heading(props: HeadingProps){
//     const children = props.children
//     return <h1>{children}</h1>;
// } 
