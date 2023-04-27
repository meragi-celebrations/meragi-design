import React from 'react';
import './Text.scss';
export interface TextProps {
    children: React.ReactNode;
    variant?: 'body' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'code' | 'description' | 'p1' | 'p2';
    strong?: boolean;
    type?: 'success' | 'danger' | 'warning' | 'info' | 'brand' | 'default';
    italic?: boolean;
    link?: boolean;
    href?: string;
    target?: string;
    rel?: string;
}
export declare const Text: React.FC<TextProps>;
export default Text;
