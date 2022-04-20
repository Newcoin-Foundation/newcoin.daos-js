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
    description: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtdao", {
      owner,
      description,
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
      vote_end,
    });
  }

  // async createNFTProposal(
  //   authorization: EosioAuthorizationObject[],
  //   proposer: string,
  //   dao_id: number,
  //   side: string,
  //   asset_ids: number[],
  //   price: string,
  //   vote_start: string,
  //   vote_end: string
  // ): Promise<EosioActionObject[]> {
  //   return this._pack(this.contract, authorization, "crtnftprl", {
  //     proposer,
  //     dao_id,
  //     side,
  //     asset_ids,
  //     price,
  //     vote_start,
  //     vote_end
  //   });
  // }

  async createStakeProposal(
    authorization: EosioAuthorizationObject[],
    proposer: string,
    dao_id: number,
    to: string,
    quantity: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtstkprp", {
      proposer,
      dao_id,
      to,
      quantity,
      vote_start,
      vote_end,
    });
  }

  async createInflateProposal(
    authorization: EosioAuthorizationObject[],
    proposer: string,
    dao_id: number,
    to: string,
    quantity: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtinflprp", {
      proposer,
      dao_id,
      to,
      quantity,
      vote_start,
      vote_end,
    });
  }

  async createDeflateProposal(
    authorization: EosioAuthorizationObject[],
    proposer: string,
    dao_id: number,
    from: string,
    quantity: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtdeflprp", {
      proposer,
      dao_id,
      from,
      quantity,
      vote_start,
      vote_end,
    });
  }

  async createWhiteListProposal(
    authorization: EosioAuthorizationObject[],
    proposer: string,
    dao_id: number,
    user: string,
    quantity: string,
    vote_start: string,
    vote_end: string
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "crtwhltprp", {
      proposer,
      dao_id,
      user,
      quantity,
      vote_start,
      vote_end,
    });
  }

  async approveProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "appproposal", {
      dao_id,
      proposal_id,
    });
  }

  async approveStakeProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "appstkprp", {
      dao_id,
      proposal_id,
    });
  }

  async approveInflateProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "appinflprp", {
      dao_id,
      proposal_id,
    });
  }

  async approveDeflateProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "appdeflprp", {
      dao_id,
      proposal_id,
    });
  }

  async approveWhiteListProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "appwhlprp", {
      dao_id,
      proposal_id,
    });
  }

  async executeProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "execproposal", {
      dao_id,
      proposal_id,
    });
  }

  async executeStakeProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "execstkprp", {
      dao_id,
      proposal_id,
    });
  }

  async executeInflateProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "execinflprp", {
      dao_id,
      proposal_id,
    });
  }

  async executeDeflateProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "execdeflprp", {
      dao_id,
      proposal_id,
    });
  }

  async executeWhiteListProposal(
    authorization: EosioAuthorizationObject[],
    dao_id: number,
    proposal_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "execwhlprp", {
      dao_id,
      proposal_id,
    });
  }

  async withdraw(
    authorization: EosioAuthorizationObject[],
    owner: string,
    vote_id: number
  ): Promise<EosioActionObject[]> {
    return this._pack(this.contract, authorization, "withdraw", {
      owner,
      vote_id,
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
      memo: `vote:${proposal_type};dao_id:${dao_id};proposal_id:${proposal_id};option:${option}`,
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
