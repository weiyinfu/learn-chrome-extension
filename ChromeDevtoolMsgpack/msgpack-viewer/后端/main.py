import typing

import msgpack
import uvicorn
from fastapi import FastAPI
from fastapi.responses import Response


class MsgpackResponse(Response):
    media_type = "text/msgpack;charset=utf8"

    # media_type = "application/x-msgpack"  # 如果header是这个，会导致自动下载数据

    def __init__(self, content):
        super().__init__(content)
        self.init_headers({
            # 'Content-Disposition': 'inline',
            # 'X-Content-Type-Options': 'nosniff',
        })

    def render(self, content: typing.Any) -> bytes:
        data = msgpack.dumps(content)
        print(len(data), data)
        for i in data:
            print(i, end=',')
        x = bytearray(list(range(256)))
        return bytes(x)


app = FastAPI()


@app.get("/")
def get():
    return MsgpackResponse({'one': [1, 2, 3], "two": ['a', 'b', 'c'], "three": {'one': 1, 'two': 2}})


if __name__ == '__main__':
    uvicorn.run(app, port=9978)
