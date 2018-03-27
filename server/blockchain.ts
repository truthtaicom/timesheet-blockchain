import * as crypto from "crypto";
import Block from './block';

export interface IBlock {
  index: number
  prevHash: string
  hash: string
  timestamp: any
  data: string
}

export default class BlockChain {
  blockchain: IBlock[];

  constructor() {
    this.blockchain = [];
    this.addNewBlock(new Block())
  }

  addNewBlock(block: IBlock) {
    if (!this.blockchain.length) {
      block.prevHash = '000000000000000000000000'
      block.hash = this.generateHash(block)
    }
    this.blockchain.push(block)
  }

  generateHash(block: IBlock) {
    const _hash: string = block.index + block.prevHash + block.timestamp + block.data;
    let hash = crypto.createHash('sha256').update(_hash).digest("hex")

    // TODO: nonce

     return hash
  }

  getPrevBlock() {
    return this.blockchain[this.blockchain.length - 1]
  }

  getNextBlock(data) {

    let block = new Block()
    let previousBlock = this.getPrevBlock()

    block.addData(data);
    block.index = previousBlock.index + 1
    block.prevHash = previousBlock.hash
    block.hash = this.generateHash(block)
    return block
  }

  getBlockChain() {
    return this.blockchain
  }
}