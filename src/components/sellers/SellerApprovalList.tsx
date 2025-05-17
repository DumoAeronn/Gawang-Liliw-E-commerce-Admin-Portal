import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Filter,
  ChevronDown,
  Eye,
  CheckCircle,
  XCircle,
} from "lucide-react";

interface Seller {
  id: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  categories: string[];
  applicationDate: string;
  status: "pending" | "approved" | "rejected";
  productImages: string[];
}

interface SellerApprovalListProps {
  onViewDetails?: (sellerId: string) => void;
  onApprove?: (sellerId: string) => void;
  onReject?: (sellerId: string) => void;
}

const SellerApprovalList = ({
  onViewDetails = () => {},
  onApprove = () => {},
  onReject = () => {},
}: SellerApprovalListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for sellers
  const mockSellers: Seller[] = [
    {
      id: "1",
      name: "Juan Dela Cruz",
      email: "juan@example.com",
      phone: "+63 912 345 6789",
      businessName: "Juan's Footwear",
      categories: ["Men's Slippers", "Women's Slippers"],
      applicationDate: "2023-06-15",
      status: "pending",
      productImages: [
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80",
        "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=400&q=80",
      ],
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria@example.com",
      phone: "+63 923 456 7890",
      businessName: "Maria's Handcrafted",
      categories: ["Children's Slippers", "Custom Designs"],
      applicationDate: "2023-06-18",
      status: "pending",
      productImages: [
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&q=80",
        "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=400&q=80",
      ],
    },
    {
      id: "3",
      name: "Pedro Reyes",
      email: "pedro@example.com",
      phone: "+63 934 567 8901",
      businessName: "Reyes Footwear",
      categories: ["Beach Slippers", "Casual Wear"],
      applicationDate: "2023-06-20",
      status: "pending",
      productImages: [
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80",
        "https://images.unsplash.com/photo-1578116922645-3976907a7671?w=400&q=80",
      ],
    },
  ];

  // Filter sellers based on search term and status
  const filteredSellers = mockSellers.filter((seller) => {
    const matchesSearch =
      seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      seller.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "all" || seller.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold">
          Seller Applications
        </CardTitle>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search sellers..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Seller</TableHead>
                <TableHead>Business Name</TableHead>
                <TableHead>Categories</TableHead>
                <TableHead>Application Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sample Products</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSellers.length > 0 ? (
                filteredSellers.map((seller) => (
                  <TableRow key={seller.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seller.name}`}
                          />
                          <AvatarFallback>
                            {seller.name.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{seller.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {seller.email}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {seller.phone}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{seller.businessName}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {seller.categories.map((category, index) => (
                          <Badge key={index} variant="outline">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(seller.applicationDate)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          seller.status === "approved"
                            ? "default"
                            : seller.status === "rejected"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {seller.status.charAt(0).toUpperCase() +
                          seller.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {seller.productImages
                          .slice(0, 2)
                          .map((image, index) => (
                            <div
                              key={index}
                              className="h-10 w-10 rounded-md overflow-hidden"
                            >
                              <img
                                src={image}
                                alt={`Product ${index + 1}`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))}
                        {seller.productImages.length > 2 && (
                          <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                            <span className="text-xs font-medium">
                              +{seller.productImages.length - 2}
                            </span>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onViewDetails(seller.id)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => onApprove(seller.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => onReject(seller.id)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-center py-6 text-muted-foreground"
                  >
                    No seller applications found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default SellerApprovalList;
