import _ from "lodash"

export function camelCase(data: any) {
    function to(s: string) {
        if (/[a-z0-9_]*/.test(s)) {
            const ss = []
            let upper = false
            for (let i = 0; i < s.length; i++) {
                if (s[i] == '_') {
                    upper = true
                } else {
                    if (upper) {
                        ss.push(s[i].toUpperCase())
                        upper = false;
                    } else {
                        ss.push(s[i])
                    }
                }
            }
            return ss.join("")
        }
        return s;
    }

    function go(data: any): any {
        if (_.isPlainObject(data)) {
            const da: { [index: string]: any } = {}
            for (const [k, v] of Object.entries(data)) {
                da[to(k)] = go(v)
            }
            return da;
        } else if (_.isArray(data)) {
            const da = [];
            for (const i of data) {
                da.push(go(i));
            }
            return da;
        }
        return data;
    }

    return go(data);
}
