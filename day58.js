//2716. Minimize String Length

function minimizedStringLength(s: string): number {
    return [...new Set(s)].length
    };