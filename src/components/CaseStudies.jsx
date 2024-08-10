import Card from "./ui/Card";
import CardContent from "./ui/CardContent";

const CaseStudies = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Case Studies of Smart Energy Management System
      </h2>

      <Card className="overflow-hidden mb-8 mx-auto">
        <CardContent className="p-0">
          <video
            src="/assets/2nd_tab_big.mp4"
            className="w-3/4  object-cover mx-auto"
            autoPlay
            loop
            muted
          />
        </CardContent>
      </Card>

      <div>
        <Card>
          <CardContent className="p-0">
            <video
              src="/assets/2nd_tab_(1,1).mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          </CardContent>
        </Card>

        <div className="grid grid-cols-2">
          <Card>
            <CardContent className="p-0">
              <img
                src="/assets/2nd_tab_below_fig.png"
                alt="Energy management diagram"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-0">
              <img
                src="/assets/2nd_tab_2_figs.png"
                alt="Case study visualization"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
