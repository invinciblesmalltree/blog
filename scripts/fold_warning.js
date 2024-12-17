'use strict';

hexo.extend.tag.register('fold_warning', function(args, content) {
  const title = args[0] || '⚠️ Warning';
  return `
<details class="warning-fold">
  <summary>${title}</summary>
  <div>
    ${hexo.render.renderSync({ text: content, engine: 'markdown' })}
  </div>
</details>
  `;
}, { ends: true });
