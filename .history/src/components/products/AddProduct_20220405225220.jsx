import React, { useState } from "react";
import { Button, Form, Header, Image, Modal, Segment } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import AddProductForm from "./AddProductForm";
import { confirmAddProduct } from "../../Services/api";