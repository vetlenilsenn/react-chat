import { ChatPosition } from '../../types';
import { default as React } from 'react';
import { Trace } from '@voiceflow/base-types';

export declare const tag: {
    <Tag extends keyof JSX.IntrinsicElements>(tag: Tag, suffix?: string | undefined): (props: React.ComponentProps<Tag>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    <Props>(component: React.ComponentType<Props>, suffix?: string | undefined): (props: Props) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export declare const ProactiveMessageContainer: import('@voiceflow/stitches-react/types/styled-component').StyledComponent<"div", {}, {
    mobile: string;
}, import('@voiceflow/stitches-react/types/css-util').CSS<{
    mobile: string;
}, {
    colors: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
        primary: string;
        darkPrimary: string;
        fadedPrimary: string;
        black: string;
        white: string;
        lightGrey: string;
        medGrey: string;
        darkGrey: string;
        blue: string;
        warn: string;
        darkWarn: string;
    };
    shadows: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    fonts: {
        default: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    fontWeights: {
        1: number;
        2: number;
    };
    lineHeights: {
        1: string;
        2: string;
        3: string;
    };
    radii: {
        1: string;
        2: string;
        round: string;
    };
}, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
    anim: (animations: (() => string)[]) => {
        animation: string;
    };
    trans: (properties: (keyof import('csstype').PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
        transition: string;
    };
    typo: ({ size, weight, height }: import('../../styles').FontOptions) => {
        fontFamily: string;
        fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
        fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
        lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
    };
}>>;
export declare const ProactiveContainer: import('@voiceflow/stitches-react/types/styled-component').StyledComponent<(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, {}, {
    mobile: string;
}, import('@voiceflow/stitches-react/types/css-util').CSS<{
    mobile: string;
}, {
    colors: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
        primary: string;
        darkPrimary: string;
        fadedPrimary: string;
        black: string;
        white: string;
        lightGrey: string;
        medGrey: string;
        darkGrey: string;
        blue: string;
        warn: string;
        darkWarn: string;
    };
    shadows: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    fonts: {
        default: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    fontWeights: {
        1: number;
        2: number;
    };
    lineHeights: {
        1: string;
        2: string;
        3: string;
    };
    radii: {
        1: string;
        2: string;
        round: string;
    };
}, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
    anim: (animations: (() => string)[]) => {
        animation: string;
    };
    trans: (properties: (keyof import('csstype').PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
        transition: string;
    };
    typo: ({ size, weight, height }: import('../../styles').FontOptions) => {
        fontFamily: string;
        fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
        fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
        lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
    };
}>>;
interface ProactiveQueueProps {
    side: ChatPosition;
    messages: Trace.AnyTrace[];
}
declare const _default: React.FC<ProactiveQueueProps> & {
    Message: import('@voiceflow/stitches-react/types/styled-component').StyledComponent<(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, {}, {
        mobile: string;
    }, import('@voiceflow/stitches-react/types/css-util').CSS<{
        mobile: string;
    }, {
        colors: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
            primary: string;
            darkPrimary: string;
            fadedPrimary: string;
            black: string;
            white: string;
            lightGrey: string;
            medGrey: string;
            darkGrey: string;
            blue: string;
            warn: string;
            darkWarn: string;
        };
        shadows: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        sizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        fonts: {
            default: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        fontWeights: {
            1: number;
            2: number;
        };
        lineHeights: {
            1: string;
            2: string;
            3: string;
        };
        radii: {
            1: string;
            2: string;
            round: string;
        };
    }, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import('csstype').PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import('../../styles').FontOptions) => {
            fontFamily: string;
            fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
            lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
        };
    }>>;
    Close: React.FC<Omit<Omit<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "css"> & import('@voiceflow/stitches-react/types/styled-component').TransformProps<{}, {
        mobile: string;
    }> & {
        css?: import('@voiceflow/stitches-react/types/css-util').CSS<{
            mobile: string;
        }, {
            colors: {
                shadow1: string;
                shadow2: string;
                shadow3: string;
                shadow4: string;
                shadow6: string;
                shadow8: string;
                shadow12: string;
                shadow16: string;
                surfaceZ1Light: string;
                primary: string;
                darkPrimary: string;
                fadedPrimary: string;
                black: string;
                white: string;
                lightGrey: string;
                medGrey: string;
                darkGrey: string;
                blue: string;
                warn: string;
                darkWarn: string;
            };
            shadows: {
                shadow1: string;
                shadow2: string;
                shadow3: string;
                shadow4: string;
                shadow6: string;
                shadow8: string;
                shadow12: string;
                shadow16: string;
                surfaceZ1Light: string;
            };
            space: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
            };
            sizes: {
                xxs: string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
            };
            fonts: {
                default: string;
            };
            fontSizes: {
                1: string;
                2: string;
                3: string;
            };
            fontWeights: {
                1: number;
                2: number;
            };
            lineHeights: {
                1: string;
                2: string;
                3: string;
            };
            radii: {
                1: string;
                2: string;
                round: string;
            };
        }, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
            anim: (animations: (() => string)[]) => {
                animation: string;
            };
            trans: (properties: (keyof import('csstype').PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
                transition: string;
            };
            typo: ({ size, weight, height }: import('../../styles').FontOptions) => {
                fontFamily: string;
                fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
                fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
                lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
            };
        }> | undefined;
    }>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map