import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";

const CTANewsletter = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    toast.success("Thank you for subscribing!");
    setEmail("");
    setAgreed(false);
  };

  return (
    <section className="relative py-24 bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000')`
      }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase">
                  Complete Garden Care
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
                One-Stop Shop For Garden Needs!
              </h2>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5M+</div>
                    <div className="text-sm text-white/80">Our Customers</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl">🌾</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2L</div>
                    <div className="text-sm text-white/80">Product sold</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-white/80">Online Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Newsletter Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter Your Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 pr-14 bg-white/95 border-0 focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground rounded-full"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="absolute right-2 top-2 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1 border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-white/90 cursor-pointer leading-relaxed"
                  >
                    I agree with the Terms and Conditions
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTANewsletter;
