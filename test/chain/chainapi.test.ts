import { doesNotMatch } from "assert";
import { expect } from "chai";
import RpcApi from "../../src/api/index";
import { DAOPayload } from "../../src/interfaces/dao.interface";
import { ProposalPayload } from "../../src/interfaces/proposal.interface";

// tslint:disable-next-line:no-var-requires
const fetch = require("node-fetch");

describe("Chain API", () => {
  const api = new RpcApi("https://testnet.newcoin.org", "daos.nco", fetch);

  const exampleDAO: DAOPayload = {
    id: "0",
    owner: "nco",
    description_sha256:
      "dfddb9d6cf44c9a15c672e186248035b782e1bbfdd332352311983c3ab635ca5",
  };

  const exampleProposal: ProposalPayload = {
    id: "0",
    daoID: "0",
    proposer: "nco",
  };
 
  it("fetch DAO by id:" + exampleDAO.id, async () => {
    const response = await api.getDAOByID(exampleDAO);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch DAO by owner:" + exampleDAO.owner, async () => {
    const response = await api.getDAOByOwner(exampleDAO);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it(
    "fetch DAO by description sha256:" + exampleDAO.descriptionSHA256,
    async () => {
      const response = await api.getDAOByDescription(exampleDAO);
      const json = await response.json();
      console.log(json);
      // expect(pool).to.deep.equal(examplePool);
    }
  ).timeout(2000);

  it("fetch proposal by id:" + exampleProposal.id, async () => {
    const response = await api.getProposalByID(exampleProposal);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch proposal by proposer:" + exampleProposal.proposer, async () => {
    const response = await api.getProposalByProposer(exampleProposal);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch NFT proposal by id:" + exampleProposal.id, async () => {
    const response = await api.getNFTProposalByID(exampleProposal);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch NFT proposal by proposer:" + exampleProposal.proposer, async () => {
    const response = await api.getNFTProposalByProposer(exampleProposal);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch retire proposal by id:" + exampleProposal.id, async () => {
    const response = await api.getNFTProposalByID(exampleProposal);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

  it("fetch retire proposal by proposer:" + exampleProposal.proposer, async () => {
    const response = await api.getRetireProposalByProposer(exampleProposal);
    const json = await response.json();
    console.log(json);
    // expect(pool).to.deep.equal(examplePool);
  }).timeout(2000);

 
});
