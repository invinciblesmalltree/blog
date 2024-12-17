'use strict';

hexo.extend.tag.register('fold_warning', function(args, content) {
  const options = {};
  args.forEach(arg => {
    const [key, value] = arg.split('=');
    options[key] = value || true;
  });

  const title = options.title || '⚠️ Warning';
  const isOpen = options.open ? 'open' : '';

  return `
<details class="warning-fold" ${isOpen}>
  <summary>${title}</summary>
  <div class="warning-content">
    ${hexo.render.renderSync({ text: content, engine: 'markdown' })}
  </div>
</details>
  `;
}, { ends: true });
