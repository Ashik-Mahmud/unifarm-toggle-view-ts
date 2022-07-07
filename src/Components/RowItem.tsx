type Props = {
  id: number;
  name: string;
  image: string;
  rewards: string;
  buttonName: string;
  fire?: boolean;
  view: Boolean;
};

const RowItem = ({
  id,
  name,
  image,
  rewards,
  fire,
  buttonName,
  view,
}: Props) => {
  return (
    <li>
      {/* info1 */}
      <div className="info-image ">
        <img src={image} alt={name} width={80} />
        <div>
          <span className="sub-title">
            Cohort 29{" "}
            {fire && (
              <img
                src="https://i.ibb.co/DCZL96w/Local-Fire-Department-Outlined.png"
                alt="fire"
              />
            )}
          </span>
          <h3>{name}</h3>
        </div>
      </div>

      {/* info2 */}
      <div className="info">
        <span className="sub-title">Pool Filled</span>
        <h3>
          <img
            src="https://i.ibb.co/mFTrJx5/Group-9175.png"
            width={30}
            alt="pool"
          />{" "}
          78.88%
        </h3>
      </div>

      {/* info3 */}
      <div className="info">
        <span className="sub-title">Rewards</span>
        <h3>
          <img src={rewards} alt={name + id} />{" "}
        </h3>
      </div>
      {/* info4 */}
      <div className="info">
        <span className="sub-title">APY</span>
        <h3>93.86%</h3>
      </div>
      {/* info5 */}
      <div className="info btn-group">
        <button>
          <img src="https://i.ibb.co/hCs8BZB/Group.png" alt="plane" />{" "}
          {buttonName}
        </button>
        {view && <button className="btn-stack">Stack</button>}
      </div>
    </li>
  );
};
export default RowItem;
