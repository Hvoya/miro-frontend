---
to: src/components/<%= type %>s/<%= Name %><%= suffix %>/package.json
---
{
  "name": "<%= h.changeCase.paramCase(name) %>",
  "main": "./<%= Name %><%= suffix %>.jsx"
}
