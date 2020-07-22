---
to: src/components/<%= type %>s/<%= Name %>/package.json
---
{
  "name": "<%= h.changeCase.paramCase(name) %>",
  "main": "./<%= Name %>.jsx"
}