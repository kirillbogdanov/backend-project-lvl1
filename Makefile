install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js
