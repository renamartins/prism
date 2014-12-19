Prism.languages.erlang = {
	'comment': /%.+/,
	'string': /"(?:\\?.)*?"/,
	'quoted-atom': {
		pattern: /'[^']+'/,
		alias: 'atom'
	},
	'boolean': /\b(?:true|false)\b/,
	'keyword': /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
	'function': /(?:\b[a-z][\w@]*|'[^']+')(?=\()/,
	'variable': /(?:\b|\?)[A-Z_][\w@]*/,
	'atom': {
		pattern: /(^|(?!\$).)\b[a-z][\w@]*/,
		lookbehind: true
	},
	'number': [
		/\$\\?./,
		/\d+#[a-z0-9]+/i,
		/(?:\b|-)\d*\.?\d+([Ee][+-]?\d+)?\b/
	],
	'operator': [
		/[=\/>:]=|>=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
		{
			pattern: /(^|(?!<).)<(?!<)/,
			lookbehind: true
		},
		{
			pattern: /(^|(?!>).)>(?!>)/,
			lookbehind: true
		}
	],
	'punctuation': /[()[\]{}:;,.#|]|<<|>>/

};