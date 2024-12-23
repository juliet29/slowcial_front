import { convertIsoDate } from "../../helpers/helpers";
interface Props extends DiscussionHeading {}

const Heading: React.FC<Props> = ({ date, user, title, tags }) => {
  return (
    <div className="mb-2">
      <p className="text-sm font-bold">
        {convertIsoDate(date)} | {user}
      </p>
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm font-bold">{tags.toUpperCase()}</p>
    </div>
  );
};

export default Heading;
