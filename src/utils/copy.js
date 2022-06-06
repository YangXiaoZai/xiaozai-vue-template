import Clipboard from 'clipboard';

let CopyText = new Object();

CopyText.install = (Vue) => {
  Vue.prototype.$CopyText = (text) => {
    let CopyBtn = document.createElement('button');
    CopyBtn.setAttribute('id', 'copy-btn');
    CopyBtn.setAttribute('data-clipboard-text', text);
    document.body.appendChild(CopyBtn);
    let clipboard = new Clipboard('#copy-btn');
    return new Promise((resolve, reject) => {
      clipboard.on('success', (e) => {
        resolve(e);
        clipboard.destroy();
        //移除节点
        document.body.removeChild(CopyBtn);
      });
      clipboard.on('error', (e) => {
        console.error('复制失败error', e);
        reject(e);
        clipboard.destroy();
        //移除节点
        document.body.removeChild(CopyBtn);
      });
      //模拟点击
      CopyBtn.click();
    });
  };
};

export default CopyText;
