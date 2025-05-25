// 免费翻译API（每日限额100次，测试够用啦！）
document.getElementById('inputText').addEventListener('input', async (e) => {
    const text = e.target.value.trim();
    if (!text) {
        document.getElementById('output').innerHTML = '';
        return;
    }
    
    const languages = [
        { code: 'en', name: '英语' },
        { code: 'ja', name: '日语' },
        {code: 'fr', name: '法语' },
        { code: 'ko', name: '韩语' }
    ];
    
    let results = '';
    for (let lang of languages) {
        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=zh-CN|${lang.code}`);
            const data = await response.json();
            results += `<div class="output"><b>${lang.name}:</b> ${data.responseData.translatedText || '（翻译失败）'}</div>`;
        } catch (error) {
            results += `<div class="output"><b>${lang.name}:</b> 🆘 API忙线中...</div>`;
        }
    }
    document.getElementById('output').innerHTML = results;
});