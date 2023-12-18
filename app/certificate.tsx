import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Certificate = () => {
  return (
    <main className="w-full">
      <h1>Special Delivery</h1>
      <p>From the north pole</p>
      <div className="flex flex-col border-green-900 border-[1px]">
        <div className="flex">
          <div className="flex flex-1 p-1 items-center justify-start h-[50px] gap-2">
            <span className="-rotate-90 uppercase">E-ID</span>
            <span data-testid="empid">INBNG305</span>
          </div>
          <div className="flex flex-1 p-1 border-green-900 border-l-[1px] items-center justify-start h-[50px] gap-2">
            <span className="-rotate-90 uppercase">Date</span>
            <span data-testid="date">{new Date().toDateString()}</span>
          </div>
        </div>
        <div className="flex flex-col border-green-900 border-y-[1px] h-[50px]">
          <span>For:</span>
          <span id=""></span>
        </div>
        <div className="flex flex-col border-green-900 border-x-[1px]">
          <p className="text-green-950 uppercase">For ELF use only.</p>
          <p className="text-green-950 uppercase">
            which list is the recipient on?
          </p>
          <div className="flex">
            <div className="flex flex-1 p-1 items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Naughty
              </p>
            </div>
            <div className="flex flex-1 p-1 border-green-900 border-l-[1px] items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Nice
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-green-900 border-y-[1px]">
          <p className="text-green-950 uppercase">Delivery method via:</p>
          <div className="flex border-green-900 border-[1px]">
            <div className="flex flex-1 p-1 items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Chimney
              </p>
            </div>
            <div className="flex flex-1 p-1 border-green-900 border-l-[1px] items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Pet door
              </p>
            </div>
          </div>
          <div className="flex border-green-900 border-y-[1px]">
            <div className="flex flex-1 p-1 items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Front Door
              </p>
            </div>
            <div className="flex flex-1 p-1 border-green-900 border-l-[1px] items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Back Door
              </p>
            </div>
          </div>
          <div className="flex border-green-900 border-y-[1px]">
            <div className="flex flex-1 p-1 items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Window
              </p>
            </div>
            <div className="flex flex-1 p-1 border-green-900 border-l-[1px] items-center justify-start h-[100px]">
              <p>
                <FontAwesomeIcon icon={faCheckSquare} />
                Garage
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-green-900 border-x-[1px]">
          <p className="text-green-950 uppercase">Delivered with love:</p>
          <p className="text-green-950 uppercase">From Santa Claus</p>
        </div>
      </div>
    </main>
  );
};

export default Certificate;
