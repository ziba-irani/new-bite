import { Typography } from "antd";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center justify-center py-5">
      <Typography className="text-white font-Lora text-base">
        A demo has been provided from
        <span className="text-greenColor px-3 decoration-transparent">
          <a
            href="https://bitetoothpastebits.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#ddf272' }}
       
          >
            https://bitetoothpastebits.com/
          </a>
        </span>
        I hope it was enjoyable for you
      </Typography>
      <div className="flex items-center mt-2 gap-5">
        <div className="flex items-center gap-1">
          <FaGithub size={20} className="text-white" />
          <Typography className="text-greenColor">
            <a
              href="https://github.com/ziba-irani/Bite"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ddf272' }}
            >
              https://github.com/ziba-irani/Bite
            </a>
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <FaLinkedin size={20} className="text-white" />
          <Typography className="text-greenColor">
            <a
              href="https://www.linkedin.com/in/ziba-irani-developr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ddf272' }}
            >
              https://www.linkedin.com/in/ziba-irani-developr{" "}
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
}
