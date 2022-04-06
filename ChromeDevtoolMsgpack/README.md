# 简介
在HTTP服务中，最常用的数据格式是JSON。然而JSON无论是解析速度还是数据大小都远远不如msgpack这种数据格式。根据我的经验，msgpack大概是JSON性能的3倍左右。因此，在前后端传输数据量较大的时候，我倾向于使用msgpack。  

JSON并非一无是处，它相对msgpack的一个优势就是可读性好。为了便于在chrome中查看接口的返回结果，模仿json-viewer实现了msgpack-viewer插件。 

# 开发记录
* 返回的数据Content-Type填写`application/x-msgpack`就会导致新标签页打开请求自动下载数据，改成`text/msgpack`就不会自动下载。 
# 相似项目
* JSON-viewer：最好用的JSON插件，配置项较为丰富。https://github.com/tulios/json-viewer
* 实现较为简单粗糙的JSON查看工具。https://github.com/callumlocke/json-formatter
* 日本人写的msgpack插件。https://github.com/ksomemo/MsgpackChromeExtension