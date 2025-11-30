import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Eye, Filter, ChevronDown, ChevronRight } from "lucide-react";
import { products, categories, Product } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedSubcategory && product.subcategory !== selectedSubcategory)
      return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-lime-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Product Catalogue
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Browse our comprehensive range of agricultural solutions organized
              by category
            </p>
          </div>
        </div>
      </section>

      {/* Products Section with Filters */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Filters */}
            <aside
              className={`
                ${showFilters ? "block" : "hidden"}
                lg:block lg:w-64 lg:flex-shrink-0
              `}
            >
              <div className="lg:sticky lg:top-24 space-y-4 bg-card rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground">Filters</h3>
                  {/* Close button only on mobile */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden"
                  >
                    <Filter className="w-5 h-5" />
                  </Button>
                </div>

                {/* Reset Filters */}
                {(selectedCategory || selectedSubcategory) && (
                  <Button
                    variant="outline"
                    className="w-full text-sm"
                    onClick={() => {
                      setSelectedCategory(null);
                      setSelectedSubcategory(null);
                    }}
                  >
                    Clear All Filters
                  </Button>
                )}

                {/* Categories */}
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="border-b border-border pb-2 last:border-b-0"
                    >
                      <button
                        onClick={() => {
                          setExpandedCategory(
                            expandedCategory === category.name
                              ? null
                              : category.name
                          );
                          setSelectedCategory(category.name);
                          setSelectedSubcategory(null);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-sm sm:text-base transition-colors ${
                          selectedCategory === category.name
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        }`}
                      >
                        <span className="font-semibold">{category.name}</span>
                        {expandedCategory === category.name ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>

                      {/* Subcategories */}
                      {expandedCategory === category.name && (
                        <div className="ml-3 mt-2 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <button
                              key={subcategory}
                              onClick={() =>
                                setSelectedSubcategory(subcategory)
                              }
                              className={`w-full text-left px-2 py-1.5 rounded text-xs sm:text-sm transition-colors ${
                                selectedSubcategory === subcategory
                                  ? "bg-lime-accent text-foreground font-semibold"
                                  : "hover:bg-accent text-muted-foreground"
                              }`}
                            >
                              {subcategory}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content - Product Grid */}
            <div className="flex-1">
              {/* Filter Toggle for Mobile */}
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters((prev) => !prev)}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>
                {filteredProducts.length > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {filteredProducts.length} products
                  </span>
                )}
              </div>

              {/* Active Filters */}
              {(selectedCategory || selectedSubcategory) && (
                <div className="mb-6 flex flex-wrap gap-2 items-center">
                  {selectedCategory && (
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      {selectedCategory}
                    </Badge>
                  )}
                  {selectedSubcategory && (
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      {selectedSubcategory}
                    </Badge>
                  )}
                  <span className="text-muted-foreground text-xs sm:text-sm">
                    ({filteredProducts.length} products)
                  </span>
                </div>
              )}

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product, index) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden border-none hover-lift cursor-pointer animate-fade-in-up"
                    style={{
                      boxShadow: "var(--shadow-card)",
                      animationDelay: `${index * 50}ms`,
                    }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain bg-background p-4 transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <Badge className="absolute top-3 right-3 bg-lime-accent text-foreground text-[10px] sm:text-xs">
                        {product.category}
                      </Badge>

                      {/* View Details Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <Button className="bg-primary hover:bg-primary/90 shadow-lg text-xs sm:text-sm px-4 py-2">
                          <Eye className="w-4 h-4 mr-1.5" />
                          View Details
                        </Button>
                      </div>
                    </div>

                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 line-clamp-2">
                        {product.composition}
                      </p>
                      <Badge
                        variant="outline"
                        className="border-primary text-primary text-[10px] sm:text-xs"
                      >
                        {product.subcategory}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground">
                    No products found in this category
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Dialog */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => !open && setSelectedProduct(null)}
      >
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-base md:text-lg">
                  {selectedProduct.composition}
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6">
                {/* Product Image */}
                <div className="flex items-center justify-center bg-accent rounded-lg p-6 md:p-8">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-auto object-contain max-h-80 md:max-h-96"
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-4 md:space-y-6 text-sm md:text-base">
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-1.5">
                      Category
                    </h4>
                    <Badge className="bg-primary text-primary-foreground">
                      {selectedProduct.category}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-1.5">
                      Subcategory
                    </h4>
                    <Badge
                      variant="outline"
                      className="border-primary text-primary"
                    >
                      {selectedProduct.subcategory}
                    </Badge>
                  </div>

                  {selectedProduct.crops && (
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-1.5">
                        Suitable Crops
                      </h4>
                      <p className="text-foreground">{selectedProduct.crops}</p>
                    </div>
                  )}

                  {selectedProduct.targetPests && (
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-1.5">
                        Target Pests
                      </h4>
                      <p className="text-foreground">
                        {selectedProduct.targetPests}
                      </p>
                    </div>
                  )}

                  {selectedProduct.dosage && (
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-1.5">
                        Recommended Dosage
                      </h4>
                      <p className="text-foreground font-mono">
                        {selectedProduct.dosage}
                      </p>
                    </div>
                  )}

                  {selectedProduct.packing && (
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-1.5">
                        Packing Available
                      </h4>
                      <p className="text-foreground">
                        {selectedProduct.packing}
                      </p>
                    </div>
                  )}

                  {selectedProduct.description && (
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-muted-foreground mb-1.5">
                        Description
                      </h4>
                      <p className="text-foreground">
                        {selectedProduct.description}
                      </p>
                    </div>
                  )}

                  <Button className="w-full bg-lime-accent hover:bg-lime-accent/90 text-foreground mt-2">
                    Request Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;
