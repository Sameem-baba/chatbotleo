import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">CHATBOT</h1>
      <div className="flex space-x-2 text-center">
        <div className="">
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */ }
            <SunIcon className="w-8 h-8" />
            <h2 className="">Examples</h2>
          </div>

          <div className="space-y-2 ">
            <p className="infoText">&quot;I’ve noticed blood in my stool. Could it be something serious?&quot;</p>
            <p className="infoText">&quot;Why have I been constipated/experiencing diarrhea for weeks?&quot;</p>
            <p className="infoText">&quot;My stool looks narrower than usual. Should I be worried?&quot;</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */ }
            <BoltIcon className="w-8 h-8" />
            <h2 className="">Capabilities</h2>
          </div>

          <div className="space-y-2 ">
            <p className="infoText">Message stored in Firebase&apos;s firestore</p>
            <p className="infoText">Hot Toast notifications when bot is thinking</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */ }
            <ExclamationTriangleIcon className="w-8 h-8" />
            <h2 className="">Limitations</h2>
          </div>

          <div className="space-y-2 ">
            <p className="infoText">Cannot Provide Definitive Medical Advice</p>
            <p className="infoText">Not a Substitute for a Doctor</p>
            <p className="infoText">Lack of Real-Time Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}
