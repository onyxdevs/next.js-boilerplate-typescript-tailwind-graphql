/**
 * @author Obada Qawwas <obada@windowslive.com>
 */
export const formatDate = (date: string): string => {
    const options: any = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const now = new Date(date).toLocaleDateString(process.env.NEXT_PUBLIC_DEFAULT_LOCALE, options);

    return now;
};

/**
 * @author Obada Qawwas <obada@windowslive.com>
 */
export const truncate = (text: string, limit: number, append: string = '...'): string => {
    if (typeof text !== 'string' || text.length === 0) return '';

    const parts = text.split(' ');

    if (parts.length > limit) {
        // loop backward through the string
        for (let i = parts.length - 1; i > -1; --i) {
            // if i is over limit, drop this word from the array
            if (i + 1 > limit) {
                parts.length = i;
            }
        }
    }

    // join the array back into a string
    return parts.join(' ') + append;
};
