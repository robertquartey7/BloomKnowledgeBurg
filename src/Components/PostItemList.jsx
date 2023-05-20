import Card from "react-bootstrap/Card";
import "./PostItemList.css";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";

const titleCase = (string) => {
  var sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1) + " ";
  }
  return sentence;
};

const PostItemList = ({ currentRecords }) => {
  return (
    <>
      {currentRecords &&
        currentRecords.map((r) => (
          <Card id="ind-card-post-item">
            <div id="left-card">
              <Link id="card-title-list-item">
                {r.sticky_top && (
                  <svg viewBox="0 0 10 16" width="1em" height="1em">
                    <path
                      fill-rule="evenodd"
                      d="M2.311 6.753L3.125.89 1.326.867 1.32.125l7.186.059.006.743L6.851.912l.855 5.859 1.786 1.702.008.831-3.583-.028-1.036 6.599-.768-6.615-3.605-.029L.5 8.426z"
                    ></path>
                  </svg>
                )}{" "}
                {r.id < 4 && <span>🔥</span>} {titleCase(r.title)}{" "}
                {r.tags.map((item) => (
                  <>
                    <Badge pill bg="light" text="dark">
                      {item}
                    </Badge>
                  </>
                ))}
              </Link>

              <p id="p-small-info">
                created at: {r.create_time} | Last Reply: {r.last_reply} 9 hours
                ago <FaBeer />
              </p>
            </div>
          </Card>
        ))}
    </>
  );
};

export default PostItemList;
