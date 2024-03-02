import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Toaster, toast } from 'sonner'
import { connect } from "react-redux";
import { quickShorten, createShortUrl } from "../Redux/actions/url.actions";
import PropTypes from 'prop-types';



const ShortenUrlCard = ({ url, auth, createShortUrl, quickShorten }) => {
  const [state, setState] = useState({ longUrl: "" });
  const [baseUrl] = useState(() =>
  import.meta.env.MODE === "production"
      ? window.location.hostname
      : window.location.hostname + ":" + window.location.port
  );

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    if (!urlPattern.test(state.longUrl)) {
      toast.error("Invalid URL entered!");
    } else {
      auth.isLoggedIn ? createShortUrl(state) : quickShorten(state);
    }
  };

  return (
    <>
      <Toaster/>
      <Card className="bg-transparent text-center text-white shorten-url-card">
        <Card.Body>
          <Card.Title>Enter your URL here!</Card.Title>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Paste your URL here..."
                name="longUrl"
                value={state.longUrl}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="px-4 rounded-pill">
              Submit
            </Button>
          </Form>
        </Card.Body>
        {url.shortened && (
          <Card.Footer className="text-muted" style={{backgroundColor: "#1F2937",
            borderRadius: '5px'}}>
            <span style={{fontSize : '1.5rem'}}>
            Short URL :
            </span> 
            <a href={`/${url.shortUrl}`} className="h4">{" "}{`${baseUrl}/${url.shortUrl}`} </a>
            <span className="copy-btn">
              <Button
                size="sm"
                variant="success"
                className="px-4 rounded-pill"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${baseUrl}/${url.shortUrl}`.trim()
                  );
                  toast.success("Copied!");
                }}
              >
                Copy
              </Button>
            </span>
          </Card.Footer>
        )}
      </Card>
    </>
  );
};

const mapStateToProps = (state) => ({ url: state.url, auth: state.auth });
const mapDispatchToProps = (dispatch) => {
  return {
    quickShorten: (body) => dispatch(quickShorten(body)),
    createShortUrl: (body) => dispatch(createShortUrl(body)),
  };
};


ShortenUrlCard.propTypes = {
  url: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  createShortUrl: PropTypes.func.isRequired,
  quickShorten: PropTypes.func.isRequired,
};

const ConnectedShortenUrlCard = connect(mapStateToProps, mapDispatchToProps)(ShortenUrlCard);
export default ConnectedShortenUrlCard;
