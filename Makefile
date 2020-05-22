install:
	npm ci
	npm link

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-calc:
	bin/brain-calc.js

brain-even:
	bin/brain-even.js

brain-gcd:
	bin/brain-gcd.js

brain-progression:
	bin/brain-progression.js

brain-prime:
	bin/brain-prime.js
