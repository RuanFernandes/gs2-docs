import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(PrismObject) {
    const {
        themeConfig: { prism },
    } = siteConfig;
    const { additionalLanguages } = prism;

    // Define GraalScript2 language
    PrismObject.languages.graalscript = {
        comment: [
            {
                pattern: /\/\/.*$/m,
                greedy: true,
            },
            {
                pattern: /\/\*[\s\S]*?\*\//,
                greedy: true,
            },
        ],
        string: {
            pattern: /"(?:[^"\\]|\\.)*"/,
            greedy: true,
        },
        number: /\b(?:[0-9]+|0[xX][0-9a-fA-F]+)\b/,
        keyword:
            /\b(?:break|case|continue|default|do|else|elseif|for|if|in|return|switch|while|with|import|public|private|const|enum|function|new|datablock)\b/,
        constant: /\b(?:true|false|nil|null|NULL|pi|timevar2)\b/,
        variable:
            /\b(?:this|thiso|temp|server|serverr|client|clientr|player|name|serveroptions)\b/,
        function: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\s*\()/,
        operator: /[-~^@\/%|=+*!?&<>]/,
        punctuation: /[{}();:,.\[\]]/,
    };

    // Add aliases
    PrismObject.languages.gs2 = PrismObject.languages.graalscript;
    PrismObject.languages.gs = PrismObject.languages.graalscript;

    // Include additional languages from config
    additionalLanguages.forEach((lang) => {
        if (lang === 'graalscript' || lang === 'gs2' || lang === 'gs') {
            // Already defined above
            return;
        }
        require(`prismjs/components/prism-${lang}`);
    });
}
