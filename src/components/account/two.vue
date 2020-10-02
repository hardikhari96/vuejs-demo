<template>
    <div class="container-fluid">
        <div class="row">
                <div class="col-md-6 p-2">
                    <div class="border-custom pr-2 pl-2">
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Billinh Firm Name</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Contact Person</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                      
                    </div>
                </div>

                <div class="col-md-6 p-2">
                    <div class="border-custom pr-2 pl-2">
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Credit Days Limit</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Membership No</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                      
                    </div>
                </div>
        </div>

        <div class="row">

                <div class="col-md-6 p-2">
                    <span class="address">Address</span>
                    <div class="border-custom pr-2 pl-2">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Zipcode</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>City</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>State</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Country</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Birthdate</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" type="date">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Aniversry</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" type="date">
                                </div>
                            </div>
                      
                    </div>
                </div>

                <div class="col-md-6 p-2">
                    <span class="address">Contact Details</span>
                    <div class="border-custom pr-2 pl-2">
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Fax</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                      
                    </div>
                    <br>
                    <div class="border-custom pr-2 pl-2">
                        
                            <div class="row">
                                <div class="col-md-6">
                                    <label>PAN No.</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>LIC No.</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>CST No.</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Stable ST No</label>
                                </div>
                                <div class="col-md-6">
                                    <input class="form-control" >
                                </div>
                            </div>
                      
                    </div>
                </div>
        </div>
    </div>
</template>


<style scoped>
span.address {
    position: relative;
    left: 28px;
    top: 11px;
    background-color: white;
    padding: 14px;
}
div.p-2>div.test>div.row{
    margin-top: 10px;
}
.border-custom{
    border: 1px dashed #676869;
    padding: 12px 6px;
    border-radius: 7px;
}
div.row > div.col-md-6 >div.border-custom> div.row{
    margin-top: 24px;
}

div.row > div.col-md-6 > div.row{
    margin-top: 20px;
}
.form-control{
    height:30px;
}
.textarea{
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>