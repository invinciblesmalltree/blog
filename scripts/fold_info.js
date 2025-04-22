'use strict';

hexo.extend.tag.register('fold_info', function(args, content) {
  const options = {};
  args.forEach(arg => {
    const [key, value] = arg.split('=');
    options[key] = value || true;
  });

  const title = options.title || '🖊 Info';
  const isOpen = options.open ? 'open' : '';

  return `
<details class="info-fold" ${isOpen}>
  <summary>${title}</summary>
  <div class="info-content">
    ${hexo.render.renderSync({ text: content, engine: 'markdown' })}
  </div>
</details>
  `;
}, { ends: true });
