import { GetTableRowsPayload } from "./../../interfaces/chain.interface";
import { DAOPayload, WhitelistPayload } from "./../../interfaces/dao.interface";
import { ProposalPayload } from "./../../interfaces/proposal.interface";
import { VotePayload } from "./../../interfaces/vote.interface";

export default class ChainApi {
  readonly nodeos_url: string;
  readonly contract: string;
  readonly fetch: any;

  constructor(nodeos_url: string, contract: string, fetch: any) {
    this.nodeos_url = nodeos_url;
    this.contract = contract;
    this.fetch = fetch;
  }

  async getTableRows(payload: GetTableRowsPayload): Promise<any> {
    return await this.fetch(`${this.nodeos_url}/v1/chain/get_table_rows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }


  async getDAOByID(opts: DAOPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "daos",
      table_key: opts.id,
      lower_bound: opts.id,
      upper_bound: opts.id,
      key_type: "i64",
      index_position: "1",
    });
  }

  async getDAOByOwner(opts: DAOPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "daos",
      table_key: opts.owner,
      lower_bound: opts.owner,
      upper_bound: opts.owner,
      key_type: "name",
      index_position: "2",
    });
  }

  async getDAOByDescription(opts: DAOPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "daos",
      table_key: opts.descriptionSHA256,
      lower_bound: opts.descriptionSHA256,
      upper_bound: opts.descriptionSHA256,
      key_type: "sha256",
      index_position: "3",
    });
  }

  async getDAOWhiteList(opts: WhitelistPayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: opts.id as any,
      table: "whitelist",
      key_type: "name",
      index_position: "1"
    });
  }

  async getProposalByID(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "proposals",
        table_key: opts.id,
        lower_bound: opts.id,
        upper_bound: opts.id,
        key_type: "i64",
        index_position: "1",
    });
  }

  async getProposalByProposer(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "proposals",
        table_key: opts.proposer,
        lower_bound: opts.proposer,
        upper_bound: opts.proposer,
        key_type: "name",
        index_position: "2",
    });
  }

  // async getNFTProposal(opts: ProposalPayload): Promise<any> {
  //   return this.getTableRows({
  //       json: true,
  //       code: this.contract,
  //       scope: opts.daoID,
  //       table: "nftproposals",
  //       table_key: opts.id,
  //       lower_bound: opts.id,
  //       upper_bound: opts.id,
  //       key_type: "i64",
  //       index_position: "1",
  //   });
  // }

  // async getNFTProposalByProposer(opts: ProposalPayload): Promise<any> {
  //   return this.getTableRows({
  //       json: true,
  //       code: this.contract,
  //       scope: opts.daoID,
  //       table: "nftproposals",
  //       table_key: opts.proposer,
  //       lower_bound: opts.proposer,
  //       upper_bound: opts.proposer,
  //       key_type: "name",
  //       index_position: "2",
  //   });
  // }

  async getStakeProposal(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "stakeprpls",
        table_key: opts.id,
        lower_bound: opts.id,
        upper_bound: opts.id,
        key_type: "i64",
        index_position: "1",
    });
  }

  async getStakeProposalByProposer(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "stakeprpls",
        table_key: opts.proposer,
        lower_bound: opts.proposer,
        upper_bound: opts.proposer,
        key_type: "name",
        index_position: "2",
    });
  }

  async getInflateProposal(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "inflateprpls",
        table_key: opts.id,
        lower_bound: opts.id,
        upper_bound: opts.id,
        key_type: "i64",
        index_position: "1",
    });
  }

  async getInflateProposalByProposer(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "inflateprpls",
        table_key: opts.proposer,
        lower_bound: opts.proposer,
        upper_bound: opts.proposer,
        key_type: "name",
        index_position: "2",
    });
  }

  async getDeflateProposal(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "deflateprpls",
        table_key: opts.id,
        lower_bound: opts.id,
        upper_bound: opts.id,
        key_type: "i64",
        index_position: "1",
    });
  }

  async getDeflateProposalByProposer(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "deflateprpls",
        table_key: opts.proposer,
        lower_bound: opts.proposer,
        upper_bound: opts.proposer,
        key_type: "name",
        index_position: "2",
    });
  }

  async getWhiteListProposal(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "whlistprpls",
        table_key: opts.id,
        lower_bound: opts.id,
        upper_bound: opts.id,
        key_type: "i64",
        index_position: "1",
    });
  }

  async getWhiteListProposalByProposer(opts: ProposalPayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.daoID,
        table: "whlistprpls",
        table_key: opts.proposer,
        lower_bound: opts.proposer,
        upper_bound: opts.proposer,
        key_type: "name",
        index_position: "2",
    });
  }

  async getVote(opts: VotePayload): Promise<any> {
    return this.getTableRows({
        json: true,
        code: this.contract,
        scope: opts.owner,
        table: "votes",
        table_key: opts.id,
        lower_bound: opts.id,
        upper_bound: opts.id,
        key_type: "i64",
        index_position: "1",
    });
  }

  async getVoteBySHA256(opts: VotePayload): Promise<any> {
    return this.getTableRows({
      json: true,
      code: this.contract,
      scope: this.contract,
      table: "votes",
      table_key: opts.votingSHA256,
      lower_bound: opts.votingSHA256,
      upper_bound: opts.votingSHA256,
      key_type: "sha256",
      index_position: "2",
    });
  }
}
