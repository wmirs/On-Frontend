export function mockNotes() {
    return [
        {
            // 笔记的唯一标识符
            id: "001",
            // 标题
            title: "New Note 1",
            // Markdown格式内容
            content: "**Hi Remilia!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting.",
            // 创建时间
            created: new Date(),
            // 是否收藏
            favorite: false
        },
        {
            // 笔记的唯一标识符
            id: "002",
            // 标题
            title: "New Note 2",
            // Markdown格式内容
            content: "**Hi Cirno!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting.",
            // 创建时间
            created: new Date(),
            // 是否收藏
            favorite: false
        }
    ]
}