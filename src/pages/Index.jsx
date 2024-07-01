import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";

function Index() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-white">Welcome to the Ice Cream Truck!</h1>
        <p className="text-xl text-white">The best ice cream in town, right at your doorstep.</p>
        <Button variant="primary" size="lg">Order Now</Button>
      </section>

      {/* About Us */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We are a family-owned ice cream truck serving the community with delicious and unique ice cream flavors. Our journey started 10 years ago, and we have been spreading joy ever since!</p>
          </CardContent>
        </Card>
      </section>

      {/* Menu */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Our Menu</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <img src="/images/vanilla.jpg" alt="Vanilla Ice Cream" className="rounded-lg" />
              <h3 className="text-lg font-semibold">Vanilla</h3>
              <p>Classic vanilla ice cream made with real vanilla beans.</p>
            </div>
            <div className="space-y-2">
              <img src="/images/chocolate.jpg" alt="Chocolate Ice Cream" className="rounded-lg" />
              <h3 className="text-lg font-semibold">Chocolate</h3>
              <p>Rich and creamy chocolate ice cream for chocolate lovers.</p>
            </div>
            <div className="space-y-2">
              <img src="/images/strawberry.jpg" alt="Strawberry Ice Cream" className="rounded-lg" />
              <h3 className="text-lg font-semibold">Strawberry</h3>
              <p>Fresh strawberry ice cream made with real strawberries.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Location & Schedule */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Location & Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find us at the following locations throughout the week:</p>
            <ul className="list-disc list-inside">
              <li>Monday: Central Park</li>
              <li>Tuesday: Downtown Plaza</li>
              <li>Wednesday: Riverside Park</li>
              <li>Thursday: City Mall</li>
              <li>Friday: Beachfront</li>
              <li>Saturday: Community Center</li>
              <li>Sunday: Farmers Market</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Contact Us */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button variant="primary" type="submit">Send Message</Button>
            </form>
            <div className="mt-6">
              <MapPin className="inline-block mr-2" />
              <span>Our usual route covers the main city areas. Check our schedule for exact locations.</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default Index;