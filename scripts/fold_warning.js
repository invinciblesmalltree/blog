'use strict';

hexo.extend.tag.register('fold_warning', function(args, content) {
  const options = {};
  args.forEach(arg => {
    const [key, value] = arg.split('=');
    options[key] = value || true;
  });

  const title = options.title || '⚠️ Warning';
  const isOpen = options.open ? 'open' : '';
  const symbol = isOpen ? '-' : '+';

  return `
<details class="warning-fold" ${isOpen}>
  <summary>
    <span class="toggle-symbol">${symbol}</span>
    ${title}
  </summary>
  <div class="warning-content">
    ${hexo.render.renderSync({ text: content, engine: 'markdown' })}
  </div>
</details>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelectorAll('.warning-fold');
  details.forEach(detail => {
    const summary = detail.querySelector('summary');
    const symbol = summary.querySelector('.toggle-symbol');
    detail.addEventListener('toggle', () => {
      symbol.textContent = detail.open ? '-' : '+';
    });
  });
});
</script>
  `;
}, { ends: true });
