import { Timeline } from "flowbite-react";

function UpcommingEvents() {
  return (
    <>
      <div className="mt-12 container px-11 overflow-hidden">
        <div className="flex flex-col justify-center items-center">

        <p className="text-center text-3xl mb-5">Upcomming events</p>
        <hr className="h-1 w-72 bg-gray-300 rounded-xl mt-1" />
        </div>

        <Timeline className="mt-7">
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>February 2024</Timeline.Time>
              <Timeline.Title>
              Big sales on mobile shop
              </Timeline.Title>
              <Timeline.Body>
              Get access to over 90+ mobile product including especial gift to make you festival more engaging and joyfull with discount offer up to 55%.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>March 2024</Timeline.Time>
              <Timeline.Title>Early access to new products</Timeline.Title>
              <Timeline.Body>
              All of new comming products early access with big discount.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>April 2024</Timeline.Time>
              <Timeline.Title>
              Happy shopping
              </Timeline.Title>
              <Timeline.Body>
              Get ready for 24th year verciray surprize. Keep on eyes on. Something big is comming.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
}

export default UpcommingEvents;
