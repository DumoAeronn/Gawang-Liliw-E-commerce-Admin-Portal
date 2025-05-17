import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Check,
  X,
  AlertCircle,
  FileText,
  Image as ImageIcon,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Store,
} from "lucide-react";

interface SellerDetailModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  seller?: SellerData;
  onApprove?: (sellerId: string) => void;
  onReject?: (sellerId: string) => void;
  onRequestMoreInfo?: (sellerId: string, message: string) => void;
}

interface SellerData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  applicationDate: string;
  businessName: string;
  businessDescription: string;
  profileImage: string;
  documents: Document[];
  products: Product[];
}

interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}

const SellerDetailModal: React.FC<SellerDetailModalProps> = ({
  open = true,
  onOpenChange,
  seller = {
    id: "seller-123",
    name: "Maria Santos",
    email: "maria@example.com",
    phone: "+63 912 345 6789",
    address: "Liliw, Laguna, Philippines",
    applicationDate: "2023-06-15",
    businessName: "Maria's Handcrafted Slippers",
    businessDescription:
      "Handmade traditional slippers using locally sourced materials with unique designs inspired by Filipino culture.",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    documents: [
      { id: "doc-1", name: "Business Permit", type: "PDF", url: "#" },
      { id: "doc-2", name: "Valid ID", type: "JPG", url: "#" },
      { id: "doc-3", name: "Tax Certificate", type: "PDF", url: "#" },
    ],
    products: [
      {
        id: "prod-1",
        name: "Traditional Abaca Slippers",
        description: "Handwoven abaca slippers with comfortable soles",
        price: 350,
        images: [
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
          "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=400&q=80",
        ],
        category: "Traditional",
      },
      {
        id: "prod-2",
        name: "Modern Woven Slippers",
        description: "Contemporary design with traditional weaving techniques",
        price: 450,
        images: [
          "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=400&q=80",
          "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=400&q=80",
        ],
        category: "Modern",
      },
      {
        id: "prod-3",
        name: "Children's Colorful Slippers",
        description: "Bright and colorful slippers for kids",
        price: 250,
        images: [
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80",
        ],
        category: "Children",
      },
    ],
  },
  onApprove,
  onReject,
  onRequestMoreInfo,
}) => {
  const [activeTab, setActiveTab] = useState("profile");
  const [requestMessage, setRequestMessage] = useState("");
  const [showRequestDialog, setShowRequestDialog] = useState(false);

  const handleApprove = () => {
    if (onApprove && seller) {
      onApprove(seller.id);
    }
  };

  const handleReject = () => {
    if (onReject && seller) {
      onReject(seller.id);
    }
  };

  const handleRequestMoreInfo = () => {
    if (onRequestMoreInfo && seller) {
      onRequestMoreInfo(seller.id, requestMessage);
      setShowRequestDialog(false);
      setRequestMessage("");
    }
  };

  if (!seller) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Store className="h-5 w-5" />
            Seller Application Review
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="profile">Profile Information</TabsTrigger>
              <TabsTrigger value="products">Product Listings</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[60vh]">
              <TabsContent value="profile" className="p-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-32 w-32">
                      <AvatarImage
                        src={seller.profileImage}
                        alt={seller.name}
                      />
                      <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-lg font-semibold">
                      {seller.name}
                    </h3>
                    <Badge className="mt-2">{seller.businessName}</Badge>
                  </div>

                  <div className="flex-1 space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="text-md font-medium mb-3">
                          Business Information
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-2">
                            <Store className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Business Name</p>
                              <p className="text-sm text-muted-foreground">
                                {seller.businessName}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                              <p className="font-medium">
                                Business Description
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {seller.businessDescription}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                            <div>
                              <p className="font-medium">Application Date</p>
                              <p className="text-sm text-muted-foreground">
                                {seller.applicationDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <h4 className="text-md font-medium mb-3">
                          Contact Information
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">{seller.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">{seller.phone}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <p className="text-sm">{seller.address}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="products" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {seller.products.map((product) => (
                    <Card key={product.id}>
                      <CardContent className="p-4">
                        <div className="aspect-video relative overflow-hidden rounded-md mb-3">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h4 className="font-semibold">{product.name}</h4>
                        <Badge className="mt-1 mb-2">{product.category}</Badge>
                        <p className="text-sm text-muted-foreground mb-2">
                          {product.description}
                        </p>
                        <p className="font-medium">
                          ₱{product.price.toFixed(2)}
                        </p>

                        {product.images.length > 1 && (
                          <div className="mt-3">
                            <p className="text-xs text-muted-foreground mb-2">
                              Additional Images
                            </p>
                            <div className="flex gap-2 overflow-x-auto pb-2">
                              {product.images.slice(1).map((image, index) => (
                                <div
                                  key={index}
                                  className="h-16 w-16 flex-shrink-0"
                                >
                                  <img
                                    src={image}
                                    alt={`${product.name} ${index + 2}`}
                                    className="h-full w-full object-cover rounded-md"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documents" className="p-4">
                <div className="space-y-4">
                  {seller.documents.map((doc) => (
                    <Card key={doc.id}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-muted h-10 w-10 rounded-md flex items-center justify-center">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {doc.type} Document
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>

        <Separator className="my-4" />

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div className="flex gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="flex items-center gap-1"
                >
                  <X className="h-4 w-4" /> Reject
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reject Seller Application</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to reject this seller application?
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleReject}
                    className="bg-destructive text-destructive-foreground"
                  >
                    Reject
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog
              open={showRequestDialog}
              onOpenChange={setShowRequestDialog}
            >
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" /> Request Info
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Request Additional Information
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Specify what additional information you need from the
                    seller.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <textarea
                  className="w-full border rounded-md p-2 text-sm min-h-[100px]"
                  placeholder="Please provide additional information about..."
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                />
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleRequestMoreInfo}
                    disabled={!requestMessage.trim()}
                  >
                    Send Request
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <Button onClick={handleApprove} className="flex items-center gap-1">
            <Check className="h-4 w-4" /> Approve Seller
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SellerDetailModal;
