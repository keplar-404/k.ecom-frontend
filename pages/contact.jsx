import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { toast } from "react-toastify";

function contact() {
  const submit = () => {
    toast("We received your message we will inform you soon", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
    });
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container flex flex-col items-center justify-center w-full h-screen px-12 bg-slate-50">
          <p className="text-2xl text-center">Contact us</p>

          <div className="w-full">
            <div className="pt-6">
              <div className="block mb-2">
                <Label htmlFor="email4" value="Your email" />
              </div>
              <TextInput
                id="email4"
                type="email"
                icon={HiMail}
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>

            <div id="textarea">
              <div className="block mb-2">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>
            <Button onClick={submit} className="w-full mt-4">Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
