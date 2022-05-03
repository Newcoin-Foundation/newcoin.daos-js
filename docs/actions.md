***

# createDao

### Parameters:
* @param owner - owner of the dao
* @param description - description of the dao

### Description:

Creates DAO in daos  table.

### Required Authorization:

**owner** account.

***

# createProposal

### Parameters:

* @param proposer - proposer account    
* @param dao_id - id of a DAO
* @param title - title of the proposal
* @param summary - summary of the proposal
* @param url - URL of the proposal
* @param vote_start - vote start date
* @param vote_end - vote end date

### Description:

Create standart proposal.

### Required Authorization:

**proposer** account.

***

***

# createStakeProposal

### Parameters:

* @param proposer - proposer account    
* @param dao_id - id of a DAO
* @param to - receiver of stake
* @param quantity - quantity of stake
* @param vote_start - vote start date
* @param vote_end - vote end date

### Description:

Create stake proposal.

### Required Authorization:

**proposer** account.

***

***

# createInflateProposal

### Parameters:

* @param proposer - proposer account    
* @param dao_id - id of a DAO
* @param to - receiver of stake
* @param quantity - quantity of inflate
* @param vote_start - vote start date
* @param vote_end - vote end date

### Description:

Create inflate proposal.

### Required Authorization:

**proposer** account.

***

***

# createDeflateProposal

### Parameters:

* @param proposer - proposer account    
* @param dao_id - id of a DAO
* @param from - receiver of stake
* @param quantity - quantity of deflate
* @param vote_start - vote start date
* @param vote_end - vote end date

### Description:

Create deflate proposal.

### Required Authorization:

**proposer** account.

***

***

# createWhiteListProposal

### Parameters:

* @param proposer - proposer account    
* @param dao_id - id of a DAO
* @param user - white listing account
* @param vote_start - vote start date
* @param vote_end - vote end date

### Description:

Create white list proposal.

### Required Authorization:

**proposer** account.

***

***

# approveProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Approve standart proposal.

### Required Authorization:

**DAO owner** account.

***

***

# approveStakeProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Approve stake proposal.

### Required Authorization:

**DAO owner** account.

***

***

# approveInflateProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Approve inflate proposal.

### Required Authorization:

**DAO owner** account.

***

***

# approveDeflateProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Approve deflate proposal.

### Required Authorization:

**DAO owner** account.

***

***

# approveWhiteListProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Approve white list proposal.

### Required Authorization:

**DAO owner** account.

***

***

# executeProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Execute white list proposal.

### Required Authorization:

**DAO owner** account.

***

***

# executeStakeProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Execute stake proposal.

### Required Authorization:

**DAO owner** account.

***

***

# executeInflateProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Execute inflate proposal.

### Required Authorization:

**DAO owner** account.

***

***

# executeDeflateProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Execute deflate proposal.

### Required Authorization:

**DAO owner** account.

***

***

# executeWhiteListProposal

### Parameters:

* @param dao_id - id of a DAO
* @param proposal_id - id of proposal

### Description:

Execute white list proposal.

### Required Authorization:

**DAO owner** account.

***

***

# withdraw

### Parameters:

* @param owner - owner of vote
* @param vote_id - id of vote

### Description:

Withdraw vote founds.

### Required Authorization:

**owner** account.

***

***

# vote

### Parameters:

* @param from - owner of vote
* @param quantity - tokens quantity of vote weight
* @param proposal_type - type of the proposal (standart/stake/nft/inflate/deflate/whitelist)
* @param dao_id - id of dao
* @param proposal_id - id of proposal
* @param option - options (YES/NO)

### Description:

Vote for proposal.

### Required Authorization:

**from** account.

***