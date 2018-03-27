import * as express from "express";
import Block from './blockchain';
import * as bodyParser from 'body-parser';

let app = express();
let blockChain = new Block()

app.use(bodyParser.json());

app.post('/', (res, req) => {
  const nextBlock = blockChain.getNextBlock(res.body)
  blockChain.addNewBlock(nextBlock)
  req.send(nextBlock)
});

app.get('/', (res, req) => {
  req.send(blockChain.getBlockChain());
});

app.listen(7890)

