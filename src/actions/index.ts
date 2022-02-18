export type EosioAuthorizationObject = { actor: string; permission: string };

export type EosioActionObject = {
  account: string;
  name: string;
  authorization: EosioAuthorizationObject[];
  data: any;
};

/* tslint:disable:variable-name */

export class ActionGenerator {
  constructor(readonly contract: string, readonly token_contract: string) {}

  async createDao(
    authorization: EosioAuthorizationObject[],
    owner: string,
    description: string,
    token: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtdao", {
      owner,
      description,
      token
    });
  }

  async createProposal(
    authorization: EosioAuthorizationObject[],
    proposer: string,
    dao_id: number,
    title: string,
    summary: string,
    url: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtproposal", {
      proposer,
      dao_id,
      title,
      summary,
      url,
      vote_start,
      vote_end
    });
  }

  async createNFTProposal(
    authorization: EosioAuthorizationObject[],
    proposer: string,
    dao_id: number,
    side: string,
    asset_ids: number[],
    price: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtnftprl", {
      proposer,
      dao_id,
      side,
      asset_ids,
      price,
      vote_start,
      vote_end
    });
  }

  async createRetireProposal(
    authorization: EosioAuthorizationObject[],
    proposer: string,
    dao_id: number,
    from: string,
    quantity: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtretireprl", {
      proposer,
      dao_id,
      from,
      quantity,
      vote_start,
      vote_end
    });
  }

  async vote(
    authorization: EosioAuthorizationObject[],
    from: string,
    quantity: string,
    proposal_type: string,
    dao_id: string,
    proposal_id: string,
    option: string

  ): Promise<EosioActionObject[]> {
    return this._pack(this.token_contract, authorization, "transfer", {
      from: from,
      to: this.contract,
      quantity: quantity,
      memo: `vote:${proposal_type};dao_id:${dao_id};proposal_id:${proposal_id};option:${option}`
    });
  }

  protected _pack(
    account: string,
    authorization: EosioAuthorizationObject[],
    name: string,
    data: any
  ): EosioActionObject[] {
    return [{ account, name, authorization, data }];
  }
}
