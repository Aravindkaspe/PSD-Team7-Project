package com.project._Dcrafts;

import com.project._Dcrafts.model.Contact;
import com.project._Dcrafts.service.ContactService;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;


@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/submit")
    public Contact submitContactForm(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
}
